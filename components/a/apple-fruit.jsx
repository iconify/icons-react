import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jew2j0b3x.css';
import '../../css/u/u6dm3mb1b.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jew2j0b3x"/><path class="u6dm3mb1b"/></g>`,
		"fallback": "marketeq:apple-fruit",
	});
}

export default Component;
