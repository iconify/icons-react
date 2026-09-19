import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1j59_5rt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1j59_5rt"/>`,
		"fallback": "fxemoji:blacklargesquare",
	});
}

export default Component;
