import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo2r4y9hz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo2r4y9hz"/>`,
		"fallback": "selfhst:authentik-dark",
	});
}

export default Component;
