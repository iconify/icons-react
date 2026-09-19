import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty2bzmojf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty2bzmojf"/>`,
		"fallback": "fa7-solid:face-sad-tear",
	});
}

export default Component;
