import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhdbmwbnb.css';

const viewBox = {"width":1024,"height":1022};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhdbmwbnb"/>`,
		"fallback": "whh:certificate",
	});
}

export default Component;
