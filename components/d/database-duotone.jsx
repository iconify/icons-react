import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0f9rv80k.css';
import '../../css/l/l0-5eybmn.css';
import '../../css/k/kzx4hx4vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d0f9rv80k"/><path class="l0-5eybmn"/><path class="kzx4hx4vr"/></g>`,
		"fallback": "reicon:database-duotone",
	});
}

export default Component;
