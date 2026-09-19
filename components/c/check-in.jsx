import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jjzc-6bds.css';
import '../../css/y/ybckblbxh.css';
import '../../css/a/an4w8gbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jjzc-6bds"/><path class="ybckblbxh"/><circle class="an4w8gbhl"/></g>`,
		"fallback": "akar-icons:check-in",
	});
}

export default Component;
