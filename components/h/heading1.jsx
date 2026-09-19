import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/si73lzbyj.css';
import '../../css/r/r8ax78qyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="si73lzbyj"/><path class="r8ax78qyz"/></g>`,
		"fallback": "hugeicons:heading1",
	});
}

export default Component;
