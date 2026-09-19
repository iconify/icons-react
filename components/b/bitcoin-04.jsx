import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fxgclebbw.css';
import '../../css/l/lkzv1yb4g.css';
import '../../css/o/oy0xlmuhe.css';
import '../../css/h/hagxqrb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fxgclebbw"/><path class="lkzv1yb4g"/><path class="oy0xlmuhe"/><path class="hagxqrb4a"/></g>`,
		"fallback": "hugeicons:bitcoin-04",
	});
}

export default Component;
