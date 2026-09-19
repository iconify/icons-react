import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aotqa7b0q.css';
import '../../css/g/gqqdycb-o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aotqa7b0q"/><path class="gqqdycb-o"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cloud-with-rain",
	});
}

export default Component;
