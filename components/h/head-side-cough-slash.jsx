import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8h17jlhi.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8h17jlhi"/>`,
		"fallback": "fa-solid:head-side-cough-slash",
	});
}

export default Component;
