import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lksl6vb4c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lksl6vb4c"/>`,
		"fallback": "garden:eye-hide-fill-12",
	});
}

export default Component;
