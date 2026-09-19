import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg-zz8hri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg-zz8hri"/>`,
		"fallback": "fa-solid:horse-head",
	});
}

export default Component;
