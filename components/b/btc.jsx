import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vlf1w1bpn.css';
import '../../css/v/vh4_kkb6d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="vlf1w1bpn"/><path class="vh4_kkb6d"/></g>`,
		"fallback": "cryptocurrency-color:btc",
	});
}

export default Component;
