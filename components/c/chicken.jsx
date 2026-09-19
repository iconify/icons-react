import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/ba72c6bek.css';
import '../../css/p/pj__vcc2b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ba72c6bek"/><path class="pj__vcc2b"/></g>`,
		"fallback": "fluent-emoji-high-contrast:chicken",
	});
}

export default Component;
