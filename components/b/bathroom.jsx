import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh2n6ee8i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh2n6ee8i"/>`,
		"fallback": "picon:bathroom",
	});
}

export default Component;
