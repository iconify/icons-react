import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ub98xnbuw.css';
import '../../css/x/xq2l1qbqf.css';
import '../../css/t/trs46fegq.css';
import '../../css/b/b2p6fabrz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ub98xnbuw"/><path class="xq2l1qbqf"/><path class="trs46fegq"/><path class="b2p6fabrz"/></g>`,
		"fallback": "streamline-flex-color:dollar-increase",
	});
}

export default Component;
