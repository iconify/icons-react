import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lin5v0buu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lin5v0buu"/>`,
		"fallback": "fa7-solid:genderless",
	});
}

export default Component;
