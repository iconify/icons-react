import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jtlk-4b-b.css';
import '../../css/v/vzkzw0bhi.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jtlk-4b-b"/><path class="vzkzw0bhi"/></g>`,
		"fallback": "marketeq:4k-2",
	});
}

export default Component;
