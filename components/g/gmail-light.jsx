import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv0ctzb8l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv0ctzb8l"/>`,
		"fallback": "selfhst:gmail-light",
	});
}

export default Component;
