import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma2cklw3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma2cklw3p"/>`,
		"fallback": "selfhst:digitalocean-dark",
	});
}

export default Component;
