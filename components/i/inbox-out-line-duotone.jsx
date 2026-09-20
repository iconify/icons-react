import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-srkbcuc.css';
import '../../css/t/te37o_dxs.css';
import '../../css/r/ribhzvbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f-srkbcuc"/><path class="te37o_dxs"/><path class="ribhzvbcl"/></g>`,
		"fallback": "solar:inbox-out-line-duotone",
	});
}

export default Component;
