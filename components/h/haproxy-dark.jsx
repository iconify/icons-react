import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nylo2vbor.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nylo2vbor"/>`,
		"fallback": "selfhst:haproxy-dark",
	});
}

export default Component;
