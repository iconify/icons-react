import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo4-bjbdj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo4-bjbdj"/>`,
		"fallback": "selfhst:charles-schwab-light",
	});
}

export default Component;
