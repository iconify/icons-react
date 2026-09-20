import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/r/ribhzvbcl.css';
import '../../css/a/alu6i0_jj.css';
import '../../css/b/bs__s6fxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="ribhzvbcl"/><path class="alu6i0_jj"/><path class="bs__s6fxp"/></g>`,
		"fallback": "solar:inbox-line-line-duotone",
	});
}

export default Component;
