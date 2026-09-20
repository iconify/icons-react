import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgi_c5ktu.css';
import '../../css/l/l2i7kkj8v.css';
import '../../css/b/bog-urfgt.css';
import '../../css/s/ste5mp1ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zgi_c5ktu"/><path class="l2i7kkj8v"/><path class="bog-urfgt"/><path class="ste5mp1ha"/></g>`,
		"fallback": "solar:electric-refueling-bold-duotone",
	});
}

export default Component;
