import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp03xxb1p.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp03xxb1p"/>`,
		"fallback": "fa6-regular:hospital",
	});
}

export default Component;
