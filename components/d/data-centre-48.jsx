import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4f6_pbnc.css';
import '../../css/t/tolo0jbro.css';
import '../../css/z/zh_bxpbcd.css';
import '../../css/n/nyl_ck5xx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4f6_pbnc"/><path class="tolo0jbro"/><path class="zh_bxpbcd"/><path class="nyl_ck5xx"/>`,
		"fallback": "energy-icons:data-centre-48",
	});
}

export default Component;
