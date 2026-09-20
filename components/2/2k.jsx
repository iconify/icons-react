import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jtlk-4b-b.css';
import '../../css/j/jgxkeub_m.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jtlk-4b-b"/><path class="jgxkeub_m"/></g>`,
		"fallback": "marketeq:2k",
	});
}

export default Component;
