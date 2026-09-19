import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j42smtb5k.css';
import '../../css/j/juqffaboa.css';
import '../../css/r/rj0i6trac.css';
import '../../css/k/kc-5kvxmx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j42smtb5k"/><path class="juqffaboa"/><path class="rj0i6trac"/><path class="kc-5kvxmx"/></g>`,
		"fallback": "glyphs:arrows-split-bold",
	});
}

export default Component;
