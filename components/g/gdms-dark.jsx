import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3o9fsq7y.css';
import '../../css/j/j4njxhbrr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3o9fsq7y"/><path class="j4njxhbrr"/>`,
		"fallback": "selfhst:gdms-dark",
	});
}

export default Component;
