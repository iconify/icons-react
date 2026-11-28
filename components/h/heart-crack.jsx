import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffzk7lbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffzk7lbzd"/>`,
		"fallback": "noviair-light:heart-crack",
	});
}

export default Component;
