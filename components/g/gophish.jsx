import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-h3k3nry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-h3k3nry"/>`,
		"fallback": "selfhst:gophish",
	});
}

export default Component;
