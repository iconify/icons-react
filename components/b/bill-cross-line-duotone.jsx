import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mbfzuei-h.css';
import '../../css/t/tnf8gbb-i.css';
import '../../css/z/zvakluojt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mbfzuei-h"/><path class="tnf8gbb-i"/><path class="zvakluojt"/></g>`,
		"fallback": "solar:bill-cross-line-duotone",
	});
}

export default Component;
