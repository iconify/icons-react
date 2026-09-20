import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/w1mv-saom.css';
import '../../css/v/v07i61__k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="w1mv-saom"/><path class="v07i61__k"/></g>`,
		"fallback": "marketeq:check-mark-square-2",
	});
}

export default Component;
