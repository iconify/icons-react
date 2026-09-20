import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya9w77bly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya9w77bly"/>`,
		"fallback": "selfhst:amazon-alexa-dark",
	});
}

export default Component;
