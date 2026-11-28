import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m_oyqjbrd.css';
import '../../css/q/qcy2itfnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m_oyqjbrd secondary"/><path class="primary qcy2itfnv"/></g>`,
		"fallback": "iconaut:cloud-star-duotone",
	});
}

export default Component;
