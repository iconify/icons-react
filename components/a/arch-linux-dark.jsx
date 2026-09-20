import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3r4d62pf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3r4d62pf"/>`,
		"fallback": "selfhst:arch-linux-dark",
	});
}

export default Component;
