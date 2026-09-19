import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq2dc2dvd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq2dc2dvd"/>`,
		"fallback": "at-icons:ball-and-socket-joint",
	});
}

export default Component;
