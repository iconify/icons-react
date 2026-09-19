import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovln3iu4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovln3iu4u"/>`,
		"fallback": "eva:email-outline",
	});
}

export default Component;
