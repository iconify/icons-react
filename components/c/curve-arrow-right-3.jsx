import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/h7xptodjo.css';
import '../../css/z/zyf1iby3w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="h7xptodjo"/><path class="zyf1iby3w"/></g>`,
		"fallback": "marketeq:curve-arrow-right-3",
	});
}

export default Component;
