import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmph2sbez.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmph2sbez"/>`,
		"fallback": "qlementine-icons:guitar-jackson-16",
	});
}

export default Component;
