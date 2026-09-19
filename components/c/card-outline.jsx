import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhua3e2df.css';
import '../../css/x/x7_z8lltl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="fhua3e2df"/><path class="x7_z8lltl"/>`,
		"fallback": "ion:card-outline",
	});
}

export default Component;
