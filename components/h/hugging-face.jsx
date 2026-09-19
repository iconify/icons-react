import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ca_w-jbco.css';
import '../../css/a/a1nkn13hi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ca_w-jbco"/><path class="a1nkn13hi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hugging-face",
	});
}

export default Component;
