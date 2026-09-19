import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a4vluxnka.css';
import '../../css/b/b100pu4gw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a4vluxnka"/><path class="b100pu4gw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:dolphin",
	});
}

export default Component;
