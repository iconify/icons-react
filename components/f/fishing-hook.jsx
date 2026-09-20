import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hk1jobb2l.css';
import '../../css/d/dk52h9d0d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="hk1jobb2l"/><path class="dk52h9d0d"/></g>`,
		"fallback": "marketeq:fishing-hook",
	});
}

export default Component;
