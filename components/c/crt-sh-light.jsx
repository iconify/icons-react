import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaztqrg0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaztqrg0h"/>`,
		"fallback": "selfhst:crt-sh-light",
	});
}

export default Component;
