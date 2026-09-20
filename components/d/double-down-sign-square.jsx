import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jga31zbai.css';
import '../../css/j/jizkpsblc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jga31zbai"/><path class="jizkpsblc"/></g>`,
		"fallback": "marketeq:double-down-sign-square",
	});
}

export default Component;
