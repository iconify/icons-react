import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nme9ebbkd.css';
import '../../css/e/ejc5e-b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nme9ebbkd"/><path class="ejc5e-b1f"/></g>`,
		"fallback": "hugeicons:bitcoin-cpu",
	});
}

export default Component;
