import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zkynpkbvl.css';
import '../../css/a/awa22zbtc.css';
import '../../css/b/by4dlac8v.css';
import '../../css/b/ba75mr9ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zkynpkbvl"/><path class="awa22zbtc"/><path class="by4dlac8v"/><path class="ba75mr9ie"/></g>`,
		"fallback": "solar:cart-2-bold",
	});
}

export default Component;
