import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fl7fp-b9g.css';
import '../../css/j/j7w_2ev7z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="fl7fp-b9g"/><path class="j7w_2ev7z"/></g>`,
		"fallback": "marketeq:cube",
	});
}

export default Component;
