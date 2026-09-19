import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qsc1-icia.css';
import '../../css/o/o_xh9pc1a.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qsc1-icia"/><path class="o_xh9pc1a"/></g>`,
		"fallback": "et:book-open",
	});
}

export default Component;
