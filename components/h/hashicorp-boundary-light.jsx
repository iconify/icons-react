import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2n94b11u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2n94b11u"/>`,
		"fallback": "selfhst:hashicorp-boundary-light",
	});
}

export default Component;
