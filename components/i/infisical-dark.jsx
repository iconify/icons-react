import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqvox4byg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqvox4byg"/>`,
		"fallback": "selfhst:infisical-dark",
	});
}

export default Component;
