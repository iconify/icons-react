import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj1s-63ya.css';
import '../../css/u/u2tnche2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj1s-63ya"/><path class="u2tnche2r"/>`,
		"fallback": "solar:circle-bottom-down-bold",
	});
}

export default Component;
