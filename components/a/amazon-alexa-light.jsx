import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fek5v6baj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fek5v6baj"/>`,
		"fallback": "selfhst:amazon-alexa-light",
	});
}

export default Component;
