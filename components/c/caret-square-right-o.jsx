import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cflr1ab0i.css';
import '../../css/u/uu2hu__dz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cflr1ab0i"/><path class="uu2hu__dz"/>`,
		"fallback": "vaadin:caret-square-right-o",
	});
}

export default Component;
