import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2ckn6b6y.css';
import '../../css/c/c2nzw5bgb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m2ckn6b6y"/><path class="c2nzw5bgb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:badminton",
	});
}

export default Component;
