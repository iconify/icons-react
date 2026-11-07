import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hl0mleb2v.css';
import '../../css/n/n8st7-4by.css';
import '../../css/x/x_2xbjk-i.css';
import '../../css/m/msronwbal.css';
import '../../css/b/b26f9obxl.css';
import '../../css/t/t8gxdtb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hl0mleb2v"/><path class="n8st7-4by"/><path class="x_2xbjk-i"/><path class="msronwbal"/><path class="b26f9obxl"/><path class="t8gxdtb3s"/></g>`,
		"fallback": "solar:dropper-2-broken",
	});
}

export default Component;
