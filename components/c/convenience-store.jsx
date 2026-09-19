import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iadqdtbkh.css';
import '../../css/q/qpnbo7btr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iadqdtbkh"/><path class="qpnbo7btr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:convenience-store",
	});
}

export default Component;
