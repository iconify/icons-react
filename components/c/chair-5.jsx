import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/z8vj8l3oo.css';
import '../../css/t/t860nxtfy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="z8vj8l3oo"/><path class="t860nxtfy"/></g>`,
		"fallback": "marketeq:chair-5",
	});
}

export default Component;
