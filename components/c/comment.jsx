import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo1lg9b4t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo1lg9b4t"/>`,
		"fallback": "fa6-solid:comment",
	});
}

export default Component;
