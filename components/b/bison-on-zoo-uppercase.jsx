import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-774wb8x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-774wb8x"/>`,
		"fallback": "pinhead:bison-on-zoo-uppercase",
	});
}

export default Component;
