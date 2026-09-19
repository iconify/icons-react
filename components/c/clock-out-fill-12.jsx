import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lirk0ib9v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lirk0ib9v"/>`,
		"fallback": "garden:clock-out-fill-12",
	});
}

export default Component;
