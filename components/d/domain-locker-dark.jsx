import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-eww7bvd.css';
import '../../css/y/y18qkbg3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-eww7bvd"/><path class="y18qkbg3r"/>`,
		"fallback": "selfhst:domain-locker-dark",
	});
}

export default Component;
