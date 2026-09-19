import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo-9dz_1v.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo-9dz_1v"/>`,
		"fallback": "whh:fridge",
	});
}

export default Component;
