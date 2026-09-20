import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3bltac4e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3bltac4e"/>`,
		"fallback": "pinhead:golf-cart",
	});
}

export default Component;
