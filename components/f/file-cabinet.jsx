import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch_h_sown.css';
import '../../css/b/b78vjvuyz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ch_h_sown"/><path class="b78vjvuyz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:file-cabinet",
	});
}

export default Component;
