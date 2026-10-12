import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4uoxw0yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4uoxw0yv"/>`,
		"fallback": "andrsrxn:arrow-up-left",
	});
}

export default Component;
