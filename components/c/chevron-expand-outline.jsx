import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7__n93bc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7__n93bc"/>`,
		"fallback": "ion:chevron-expand-outline",
	});
}

export default Component;
