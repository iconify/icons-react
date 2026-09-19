import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb6b2vb4u.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb6b2vb4u"/>`,
		"fallback": "fa6-solid:hospital-user",
	});
}

export default Component;
