import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur_xiv5wy.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur_xiv5wy"/>`,
		"fallback": "zmdi:comment-list",
	});
}

export default Component;
