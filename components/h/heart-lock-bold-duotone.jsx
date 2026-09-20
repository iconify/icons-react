import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0nbc90lp.css';
import '../../css/z/zs6l8u0uh.css';
import '../../css/k/kk8cc_bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k0nbc90lp"/><path class="zs6l8u0uh"/><path class="kk8cc_bez"/></g>`,
		"fallback": "solar:heart-lock-bold-duotone",
	});
}

export default Component;
