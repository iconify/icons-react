import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/q_w-rcglp.css';
import '../../css/a/a5vlqqevf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="q_w-rcglp"/><path class="a5vlqqevf"/></g>`,
		"fallback": "marketeq:home-3",
	});
}

export default Component;
