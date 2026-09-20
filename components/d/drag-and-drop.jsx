import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd_z6iuxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd_z6iuxt"/>`,
		"fallback": "pixelarticons:drag-and-drop",
	});
}

export default Component;
