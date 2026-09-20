import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knys2nb9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knys2nb9e"/>`,
		"fallback": "selfhst:capcut-light",
	});
}

export default Component;
