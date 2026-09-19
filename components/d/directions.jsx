import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x34gufoco.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x34gufoco"/>`,
		"fallback": "fa7-solid:directions",
	});
}

export default Component;
