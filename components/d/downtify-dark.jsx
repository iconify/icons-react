import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vby9crrze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vby9crrze"/>`,
		"fallback": "selfhst:downtify-dark",
	});
}

export default Component;
