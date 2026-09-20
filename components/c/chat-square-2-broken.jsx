import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ot4eah36m.css';
import '../../css/d/d0ubpwxhe.css';
import '../../css/z/zoy5yqq7a.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ot4eah36m"/><path class="d0ubpwxhe"/><path class="zoy5yqq7a"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:chat-square-2-broken",
	});
}

export default Component;
