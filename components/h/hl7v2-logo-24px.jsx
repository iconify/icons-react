import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pennd-s7a.css';
import '../../css/z/z428z62ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pennd-s7a"/><path class="z428z62ag"/></g>`,
		"fallback": "healthicons:hl7v2-logo-24px",
	});
}

export default Component;
