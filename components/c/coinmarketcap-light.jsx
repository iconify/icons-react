import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy1olh6cw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy1olh6cw"/>`,
		"fallback": "selfhst:coinmarketcap-light",
	});
}

export default Component;
