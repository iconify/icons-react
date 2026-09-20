import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f63fvf6ek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f63fvf6ek"/>`,
		"fallback": "ix:disconnected",
	});
}

export default Component;
