import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlzscws7b.css';
import '../../css/q/qgh2yv_po.css';
import '../../css/f/fn6kh-bsj.css';
import '../../css/a/akjz_4bvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="matrix(2.4 0 0 2.4 14.897 14.897)"><path class="wlzscws7b"/><path class="qgh2yv_po"/><circle class="fn6kh-bsj"/><circle class="akjz_4bvf"/></g>`,
		"fallback": "xero-emoji:eye-in-speech-bubble",
	});
}

export default Component;
