import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_31yxbfj.css';
import '../../css/k/k0rbv5bij.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_31yxbfj"/><path class="k0rbv5bij"/></g>`,
		"fallback": "fluent-emoji-high-contrast:film-projector",
	});
}

export default Component;
