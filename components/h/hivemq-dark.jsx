import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzodz7b_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzodz7b_h"/>`,
		"fallback": "selfhst:hivemq-dark",
	});
}

export default Component;
