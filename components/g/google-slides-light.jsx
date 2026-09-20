import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu6tghbwj.css';
import '../../css/x/xblsrbb2u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu6tghbwj"/><path class="xblsrbb2u"/>`,
		"fallback": "selfhst:google-slides-light",
	});
}

export default Component;
