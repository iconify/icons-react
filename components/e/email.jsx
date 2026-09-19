import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msel8rbya.css';
import '../../css/z/zt3trxb6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msel8rbya"/><path class="zt3trxb6e"/>`,
		"fallback": "ion:email",
	});
}

export default Component;
