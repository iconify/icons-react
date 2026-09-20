import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d468uqblc.css';
import '../../css/r/r69d2ebvv.css';
import '../../css/v/vmvmzcbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d468uqblc"/><path class="r69d2ebvv"/><path class="vmvmzcbhp"/></g>`,
		"fallback": "solar:archive-up-minimalistic-line-duotone",
	});
}

export default Component;
