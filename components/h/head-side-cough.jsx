import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2jfklm1v.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2jfklm1v"/>`,
		"fallback": "fa6-solid:head-side-cough",
	});
}

export default Component;
