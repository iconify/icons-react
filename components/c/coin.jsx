import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdoa3kqmg.css';
import '../../css/g/g2l8iqnuw.css';
import '../../css/o/or9nmxbka.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pdoa3kqmg"/><path class="g2l8iqnuw"/><path class="or9nmxbka"/></g>`,
		"fallback": "fluent-emoji-high-contrast:coin",
	});
}

export default Component;
