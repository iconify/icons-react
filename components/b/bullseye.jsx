import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5hhus5xl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5hhus5xl"/>`,
		"fallback": "fa7-solid:bullseye",
	});
}

export default Component;
