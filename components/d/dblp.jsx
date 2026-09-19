import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwz6_x2lb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwz6_x2lb"/>`,
		"fallback": "cib:dblp",
	});
}

export default Component;
