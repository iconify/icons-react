import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx2hbdw_u.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx2hbdw_u"/>`,
		"fallback": "vs:6-square",
	});
}

export default Component;
