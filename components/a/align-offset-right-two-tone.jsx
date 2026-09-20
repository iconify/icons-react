import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/u/u4az-xbcb.css';
import '../../css/v/vqkc50bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="u4az-xbcb"/><path class="vqkc50bpn"/></g>`,
		"fallback": "keyline-icons:align-offset-right-two-tone",
	});
}

export default Component;
