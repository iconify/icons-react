import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/u7vgjzb1d.css';
import '../../css/p/pt1vl9sze.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="u7vgjzb1d"/><path class="pt1vl9sze"/></g>`,
		"fallback": "marketeq:chaise-longue",
	});
}

export default Component;
