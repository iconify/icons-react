import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuuepsb8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuuepsb8j"/>`,
		"fallback": "selfhst:fladder-light",
	});
}

export default Component;
