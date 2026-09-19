import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuxbbqk4y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuxbbqk4y"/>`,
		"fallback": "garden:align-justify-fill-16",
	});
}

export default Component;
