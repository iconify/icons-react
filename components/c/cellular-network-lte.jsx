import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lax5n35xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lax5n35xm"/>`,
		"fallback": "andrsrxn:cellular-network-lte",
	});
}

export default Component;
