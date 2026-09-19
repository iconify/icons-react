import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sqy_rib1q.css';
import '../../css/b/bkqbhrlym.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sqy_rib1q"/><path class="bkqbhrlym"/></g>`,
		"fallback": "fluent-emoji-high-contrast:down-left-arrow",
	});
}

export default Component;
