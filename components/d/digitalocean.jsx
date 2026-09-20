import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dla8w8bon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dla8w8bon"/>`,
		"fallback": "selfhst:digitalocean",
	});
}

export default Component;
