import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu6tghbwj.css';
import '../../css/l/lb66l3jkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu6tghbwj"/><path class="lb66l3jkg"/>`,
		"fallback": "selfhst:google-sheets-light",
	});
}

export default Component;
