import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_2585bcn.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_2585bcn"/>`,
		"fallback": "whh:barchartasc",
	});
}

export default Component;
