import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lia6c03rv.css';
import '../../css/t/tyqxlrbzk.css';
import '../../css/e/efke-wbwi.css';
import '../../css/l/lt87iveio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lia6c03rv"/><path class="tyqxlrbzk"/><path class="efke-wbwi"/><path class="lt87iveio"/></g>`,
		"fallback": "solar:columns-4-line-duotone",
	});
}

export default Component;
