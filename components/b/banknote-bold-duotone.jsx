import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nwzadmbzz.css';
import '../../css/i/ikjivy1kl.css';
import '../../css/y/yaqpnvgfb.css';
import '../../css/a/a2owrl2nd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nwzadmbzz"/><path class="ikjivy1kl"/><path class="yaqpnvgfb"/><path clip-rule="evenodd" class="a2owrl2nd"/></g>`,
		"fallback": "solar:banknote-bold-duotone",
	});
}

export default Component;
