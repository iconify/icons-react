import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8go85b3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8go85b3t"/>`,
		"fallback": "selfhst:ackify-dark",
	});
}

export default Component;
