import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnt97vblj.css';
import '../../css/s/sttdwq4fh.css';
import '../../css/e/ee7yz0sic.css';
import '../../css/w/wkk2wqcxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rnt97vblj"/><path class="sttdwq4fh"/><path class="ee7yz0sic"/><path class="wkk2wqcxb"/></g>`,
		"fallback": "solar:calculator-line-duotone",
	});
}

export default Component;
