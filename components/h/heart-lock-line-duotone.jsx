import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ckhddnose.css';
import '../../css/z/ztulofeqi.css';
import '../../css/q/qjcn1b-9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ckhddnose"/><path class="ztulofeqi"/><path class="qjcn1b-9j"/></g>`,
		"fallback": "solar:heart-lock-line-duotone",
	});
}

export default Component;
