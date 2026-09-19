import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/v5c-s2bvd.css';
import '../../css/e/e2go9bcrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="v5c-s2bvd"/><path class="e2go9bcrd"/></g>`,
		"fallback": "hugeicons:foursquare",
	});
}

export default Component;
