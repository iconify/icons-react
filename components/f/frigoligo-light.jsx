import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8yurrbhk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8yurrbhk"/>`,
		"fallback": "selfhst:frigoligo-light",
	});
}

export default Component;
