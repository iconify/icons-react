import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uopsl9spe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uopsl9spe"/>`,
		"fallback": "bi:arrow-up-left-square-fill",
	});
}

export default Component;
