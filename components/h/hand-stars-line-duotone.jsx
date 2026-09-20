import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xwggvq01q.css';
import '../../css/z/zkkdtubov.css';
import '../../css/t/twucrwbct.css';
import '../../css/a/aw7yywbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xwggvq01q"/><path class="zkkdtubov"/><path class="twucrwbct"/><path class="aw7yywbhe"/></g>`,
		"fallback": "solar:hand-stars-line-duotone",
	});
}

export default Component;
