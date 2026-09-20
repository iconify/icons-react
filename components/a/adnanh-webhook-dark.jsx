import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4uxtx7ip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4uxtx7ip"/>`,
		"fallback": "selfhst:adnanh-webhook-dark",
	});
}

export default Component;
