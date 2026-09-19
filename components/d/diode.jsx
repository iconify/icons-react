import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fej6so66v.css';

const viewBox = {"width":1024,"height":641};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fej6so66v"/>`,
		"fallback": "whh:diode",
	});
}

export default Component;
