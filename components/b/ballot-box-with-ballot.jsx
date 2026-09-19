import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kexc_mbqq.css';
import '../../css/d/dv7fb5hbm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kexc_mbqq"/><path class="dv7fb5hbm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ballot-box-with-ballot",
	});
}

export default Component;
