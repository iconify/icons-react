import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y492fvb9i.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y492fvb9i"/>`,
		"fallback": "fa-solid:anchor",
	});
}

export default Component;
