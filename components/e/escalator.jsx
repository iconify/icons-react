import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyi9sg69u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyi9sg69u"/>`,
		"fallback": "picon:escalator",
	});
}

export default Component;
