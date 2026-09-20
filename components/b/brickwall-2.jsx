import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xk9w9wbwc.css';
import '../../css/d/d74axybum.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xk9w9wbwc"/><path class="d74axybum"/></g>`,
		"fallback": "marketeq:brickwall-2",
	});
}

export default Component;
