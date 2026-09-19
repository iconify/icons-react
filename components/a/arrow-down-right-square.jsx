import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1r0tnbsh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1r0tnbsh"/>`,
		"fallback": "bi:arrow-down-right-square",
	});
}

export default Component;
