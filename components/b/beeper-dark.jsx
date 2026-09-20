import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0hbd4wrx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0hbd4wrx"/>`,
		"fallback": "selfhst:beeper-dark",
	});
}

export default Component;
