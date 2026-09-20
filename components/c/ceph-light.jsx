import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed6msyqpy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed6msyqpy"/>`,
		"fallback": "selfhst:ceph-light",
	});
}

export default Component;
