import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qooepw9_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qooepw9_d"/>`,
		"fallback": "selfhst:buy-me-a-coffee-dark",
	});
}

export default Component;
