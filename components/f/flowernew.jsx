import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0c1x_brt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0c1x_brt"/>`,
		"fallback": "whh:flowernew",
	});
}

export default Component;
