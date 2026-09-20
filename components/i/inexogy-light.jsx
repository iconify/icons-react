import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7jgjy2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az7jgjy2r"/>`,
		"fallback": "selfhst:inexogy-light",
	});
}

export default Component;
