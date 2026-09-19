import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/khx4ibc_f.css';
import '../../css/k/kl-8s6a-y.css';

const viewBox = {"width":28,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="khx4ibc_f"/><path class="kl-8s6a-y"/></g>`,
		"fallback": "et:flag",
	});
}

export default Component;
