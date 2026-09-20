import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hke8i3ela.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hke8i3ela"/>`,
		"fallback": "selfhst:hivemq-light",
	});
}

export default Component;
