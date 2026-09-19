import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hkx42l5xa.css';
import '../../css/v/vxdu-kbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hkx42l5xa"/><path class="vxdu-kbga"/></g>`,
		"fallback": "healthicons:chart-infected-stable-24px",
	});
}

export default Component;
