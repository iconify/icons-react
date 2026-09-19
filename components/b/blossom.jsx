import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1v3b-obh.css';
import '../../css/c/cgfcjfb0i.css';
import '../../css/l/lrqfpk3ka.css';
import '../../css/p/pvf-i_bsx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1v3b-obh"/><path class="cgfcjfb0i"/><path class="lrqfpk3ka"/><circle class="pvf-i_bsx"/>`,
		"fallback": "fxemoji:blossom",
	});
}

export default Component;
