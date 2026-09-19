import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fzws6pbvq.css';
import '../../css/i/i-i71wbzb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fzws6pbvq"/><path class="i-i71wbzb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bouquet",
	});
}

export default Component;
