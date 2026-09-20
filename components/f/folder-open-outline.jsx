import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skg5yh4xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skg5yh4xo"/>`,
		"fallback": "mdi:folder-open-outline",
	});
}

export default Component;
