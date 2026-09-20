import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/enk8qtlox.css';
import '../../css/j/je1b02vbz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="enk8qtlox"/><path class="je1b02vbz"/></g>`,
		"fallback": "marketeq:caravan",
	});
}

export default Component;
