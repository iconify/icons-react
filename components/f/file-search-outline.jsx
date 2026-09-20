import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jee5rlb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jee5rlb4l"/>`,
		"fallback": "mdi:file-search-outline",
	});
}

export default Component;
