import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vex5fhbuk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vex5fhbuk"/>`,
		"fallback": "qlementine-icons:hand-rock-16",
	});
}

export default Component;
