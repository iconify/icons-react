import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/euv8ulcjs.css';
import '../../css/x/x8o31lbdb.css';
import '../../css/l/lr5t2sbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="euv8ulcjs"/><path class="x8o31lbdb"/><path class="lr5t2sbhe"/></g>`,
		"fallback": "hugeicons:gift",
	});
}

export default Component;
