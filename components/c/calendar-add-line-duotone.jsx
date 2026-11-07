import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qpizk3b2i.css';
import '../../css/k/krvkaiboe.css';
import '../../css/a/akmtuqbnt.css';
import '../../css/f/f39he8onf.css';
import '../../css/k/knpnsdbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qpizk3b2i"/><path class="krvkaiboe"/><path class="akmtuqbnt"/><path class="f39he8onf"/><path class="knpnsdbbr"/></g>`,
		"fallback": "solar:calendar-add-line-duotone",
	});
}

export default Component;
