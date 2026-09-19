import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9ng2ub9o.css';
import '../../css/t/t2k1y2acb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9ng2ub9o"/><path class="t2k1y2acb"/>`,
		"fallback": "boxicons:cart-x",
	});
}

export default Component;
