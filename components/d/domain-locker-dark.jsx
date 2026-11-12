import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd0qpkb5y.css';
import '../../css/y/y18qkbg3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd0qpkb5y"/><path class="y18qkbg3r"/>`,
		"fallback": "selfhst:domain-locker-dark",
	});
}

export default Component;
