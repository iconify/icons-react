import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mjcjiqbja.css';
import '../../css/l/l0jcfq-9t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="mjcjiqbja"/><path class="l0jcfq-9t"/></g>`,
		"fallback": "marketeq:game-console-cable",
	});
}

export default Component;
