import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w81d89beh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w81d89beh"/>`,
		"fallback": "garden:clock-fill-12",
	});
}

export default Component;
