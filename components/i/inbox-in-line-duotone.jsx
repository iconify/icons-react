import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m06nw7mgj.css';
import '../../css/r/ribhzvbcl.css';
import '../../css/f/f-srkbcuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m06nw7mgj"/><path class="ribhzvbcl"/><path class="f-srkbcuc"/></g>`,
		"fallback": "solar:inbox-in-line-duotone",
	});
}

export default Component;
