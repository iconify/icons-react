import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c892716ue.css';
import '../../css/q/q1wo1tufo.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c892716ue"/><path class="q1wo1tufo"/></g>`,
		"fallback": "marketeq:bracket-2",
	});
}

export default Component;
