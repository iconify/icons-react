import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km37tmb_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km37tmb_u"/>`,
		"fallback": "selfhst:hbo",
	});
}

export default Component;
