import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3pn4uakb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3pn4uakb"/>`,
		"fallback": "garden:clipboard-list-fill-12",
	});
}

export default Component;
