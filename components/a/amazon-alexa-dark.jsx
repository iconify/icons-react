import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do-ojo0gm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do-ojo0gm"/>`,
		"fallback": "selfhst:amazon-alexa-dark",
	});
}

export default Component;
