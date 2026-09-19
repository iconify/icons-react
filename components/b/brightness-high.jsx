import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgx52e-ac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgx52e-ac"/>`,
		"fallback": "bi:brightness-high",
	});
}

export default Component;
