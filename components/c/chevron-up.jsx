import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmpj2ppka.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmpj2ppka"/>`,
		"fallback": "fa7-solid:chevron-up",
	});
}

export default Component;
