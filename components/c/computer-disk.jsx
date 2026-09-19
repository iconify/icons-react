import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lp6473btb.css';
import '../../css/k/ka9re8y8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lp6473btb"/><path class="ka9re8y8g"/></g>`,
		"fallback": "fluent-emoji-high-contrast:computer-disk",
	});
}

export default Component;
