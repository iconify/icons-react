import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etxd1-exq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etxd1-exq"/>`,
		"fallback": "selfhst:amicoscript",
	});
}

export default Component;
