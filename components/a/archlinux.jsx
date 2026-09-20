import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-g-0cb9p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-g-0cb9p"/>`,
		"fallback": "picon:archlinux",
	});
}

export default Component;
