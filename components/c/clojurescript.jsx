import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dilm5cb8z.css';
import '../../css/k/ktk7rfg2u.css';
import '../../css/v/vyxuym72m.css';
import '../../css/c/c_ime9bag.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dilm5cb8z"/><g class="ktk7rfg2u"><path class="vyxuym72m"/><path class="c_ime9bag"/></g></g>`,
		"fallback": "thesvg:clojurescript",
	});
}

export default Component;
