import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibe_u-t6g.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibe_u-t6g"/>`,
		"fallback": "zmdi:comment-outline",
	});
}

export default Component;
