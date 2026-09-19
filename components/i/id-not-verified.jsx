import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsxekjb5b.css';
import '../../css/k/ky_ijxfrq.css';
import '../../css/q/qkjx0v_3m.css';
import '../../css/p/pfvktcckz.css';
import '../../css/e/eyecnxbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lsxekjb5b"/><path class="ky_ijxfrq"/><path class="qkjx0v_3m"/><path class="pfvktcckz"/><path class="eyecnxbec"/></g>`,
		"fallback": "hugeicons:id-not-verified",
	});
}

export default Component;
