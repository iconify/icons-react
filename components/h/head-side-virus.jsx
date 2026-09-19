import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grm7v7f_o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grm7v7f_o"/>`,
		"fallback": "fa7-solid:head-side-virus",
	});
}

export default Component;
