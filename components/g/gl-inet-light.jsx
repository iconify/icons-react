import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me-ycib7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me-ycib7u"/>`,
		"fallback": "selfhst:gl-inet-light",
	});
}

export default Component;
