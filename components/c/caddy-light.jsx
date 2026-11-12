import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cybvs067u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cybvs067u"/>`,
		"fallback": "selfhst:caddy-light",
	});
}

export default Component;
