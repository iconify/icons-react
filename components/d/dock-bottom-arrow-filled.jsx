import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvl56vbvg.css';
import '../../css/t/tnzkiacoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvl56vbvg"/><path class="tnzkiacoo"/>`,
		"fallback": "boxicons:dock-bottom-arrow-filled",
	});
}

export default Component;
