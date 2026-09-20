import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/k_w5h1bez.css';
import '../../css/h/hu09e9b_t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="k_w5h1bez"/><path class="hu09e9b_t"/></g>`,
		"fallback": "marketeq:home-alt-3",
	});
}

export default Component;
