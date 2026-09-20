import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rho2yp0gt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rho2yp0gt"/>`,
		"fallback": "map:book-store",
	});
}

export default Component;
