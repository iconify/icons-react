import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/ex6orob3n.css';
import '../../css/c/c68l9tbcy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ex6orob3n"/><path class="c68l9tbcy"/></g>`,
		"fallback": "marketeq:backward-2",
	});
}

export default Component;
