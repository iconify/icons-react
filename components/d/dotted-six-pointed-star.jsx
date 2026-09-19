import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nk8cnpb-g.css';
import '../../css/v/vqgw5ji_v.css';
import '../../css/u/uru88vgdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nk8cnpb-g"/><path class="vqgw5ji_v"/><path class="uru88vgdy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:dotted-six-pointed-star",
	});
}

export default Component;
