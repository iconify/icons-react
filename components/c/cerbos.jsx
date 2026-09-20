import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_zp79prb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_zp79prb"/>`,
		"fallback": "selfhst:cerbos",
	});
}

export default Component;
