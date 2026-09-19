import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oq-2mu1nq.css';
import '../../css/r/rw3vogyjk.css';
import '../../css/h/hfwk_kb2v.css';
import '../../css/d/dnt6q0xxs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oq-2mu1nq"/><path class="rw3vogyjk"/><path class="hfwk_kb2v"/><path class="dnt6q0xxs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:diya-lamp",
	});
}

export default Component;
