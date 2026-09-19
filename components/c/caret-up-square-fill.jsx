import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0yx3epbf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0yx3epbf"/>`,
		"fallback": "bi:caret-up-square-fill",
	});
}

export default Component;
