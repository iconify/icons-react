import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ro7vyibyz.css';
import '../../css/z/za6gxehtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ro7vyibyz"/><path class="za6gxehtt"/></g>`,
		"fallback": "solar:basketball-line-duotone",
	});
}

export default Component;
