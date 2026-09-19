import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6hnyjb8q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6hnyjb8q"/>`,
		"fallback": "garden:align-center-fill-12",
	});
}

export default Component;
