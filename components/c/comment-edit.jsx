import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hophqoejb.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hophqoejb"/>`,
		"fallback": "zmdi:comment-edit",
	});
}

export default Component;
