import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwcb9nbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwcb9nbmv"/>`,
		"fallback": "mdi:file-rotate-left",
	});
}

export default Component;
