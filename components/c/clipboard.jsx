import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2zlohrem.css';
import '../../css/i/i4_597bsq.css';
import '../../css/w/wrz0hmb2v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k2zlohrem"/><path class="i4_597bsq"/><path class="wrz0hmb2v"/></g>`,
		"fallback": "fluent-emoji-high-contrast:clipboard",
	});
}

export default Component;
