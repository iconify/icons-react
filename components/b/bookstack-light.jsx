import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viz9rp2hv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viz9rp2hv"/>`,
		"fallback": "selfhst:bookstack-light",
	});
}

export default Component;
