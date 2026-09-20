import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa3_oub9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa3_oub9i"/>`,
		"fallback": "selfhst:bible-gateway-dark",
	});
}

export default Component;
