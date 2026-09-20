import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcqr4nb2y.css';
import '../../css/a/aruuerbat.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcqr4nb2y"/><path class="aruuerbat"/>`,
		"fallback": "selfhst:headlamp",
	});
}

export default Component;
