import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce1v0cccs.css';
import '../../css/x/xnqtkuy1x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce1v0cccs"/><path class="xnqtkuy1x"/>`,
		"fallback": "selfhst:frappe-learning",
	});
}

export default Component;
