import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t68u_vbpr.css';
import '../../css/c/cs3fob1lr.css';
import '../../css/w/wfz41fcby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t68u_vbpr"/><path class="cs3fob1lr"/><path class="wfz41fcby"/>`,
		"fallback": "flat-color-icons:address-book",
	});
}

export default Component;
