import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrr_ohbmo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrr_ohbmo"/>`,
		"fallback": "selfhst:compose-craft-light",
	});
}

export default Component;
