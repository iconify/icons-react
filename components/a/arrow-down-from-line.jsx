import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g1z4pnb_m.css';
import '../../css/l/lobj_3gyy.css';
import '../../css/a/ank-fxw4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="g1z4pnb_m"/><path class="lobj_3gyy"/><path class="ank-fxw4k"/></g>`,
		"fallback": "matita:arrow-down-from-line",
	});
}

export default Component;
