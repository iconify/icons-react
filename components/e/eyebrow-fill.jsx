import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpbvs9qry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpbvs9qry"/>`,
		"fallback": "mingcute:eyebrow-fill",
	});
}

export default Component;
