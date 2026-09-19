import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sa0bz32lw.css';
import '../../css/x/xslfg2evh.css';
import '../../css/g/g5srfcchm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sa0bz32lw"/><path class="xslfg2evh"/><path class="g5srfcchm"/></g>`,
		"fallback": "hugeicons:arrow-down-to-line",
	});
}

export default Component;
