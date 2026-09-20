import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dyqk3wviz.css';
import '../../css/l/lagsnibuz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="dyqk3wviz"/><path class="lagsnibuz"/></g>`,
		"fallback": "marketeq:id-card",
	});
}

export default Component;
