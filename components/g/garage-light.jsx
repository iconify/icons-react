import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd5rqgb3c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd5rqgb3c"/>`,
		"fallback": "selfhst:garage-light",
	});
}

export default Component;
