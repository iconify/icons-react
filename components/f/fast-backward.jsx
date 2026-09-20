import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/k77fwmbzl.css';
import '../../css/s/sk995nd_w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="k77fwmbzl"/><path class="sk995nd_w"/></g>`,
		"fallback": "marketeq:fast-backward",
	});
}

export default Component;
