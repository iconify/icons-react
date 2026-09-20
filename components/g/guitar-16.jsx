import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojsua1phm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojsua1phm"/>`,
		"fallback": "qlementine-icons:guitar-16",
	});
}

export default Component;
