import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le6bjebxm.css';
import '../../css/c/ct-rsubrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le6bjebxm"/><path class="ct-rsubrf"/>`,
		"fallback": "solar:heart-broken-bold",
	});
}

export default Component;
