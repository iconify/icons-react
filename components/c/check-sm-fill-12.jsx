import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wllc8hh9n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wllc8hh9n"/>`,
		"fallback": "garden:check-sm-fill-12",
	});
}

export default Component;
