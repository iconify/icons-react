import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cg0pfosfz.css';
import '../../css/a/a0j3wxb9s.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cg0pfosfz"/><path class="a0j3wxb9s"/></g>`,
		"fallback": "marketeq:down-trend",
	});
}

export default Component;
