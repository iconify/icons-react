import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6a4ylago.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6a4ylago"/>`,
		"fallback": "zmdi:comment-more",
	});
}

export default Component;
