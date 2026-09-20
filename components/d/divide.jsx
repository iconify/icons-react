import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vj04c2bej.css';
import '../../css/e/e3ixk8zud.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="vj04c2bej"/><path class="e3ixk8zud"/></g>`,
		"fallback": "marketeq:divide",
	});
}

export default Component;
