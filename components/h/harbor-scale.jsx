import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wza49-blk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wza49-blk"/>`,
		"fallback": "selfhst:harbor-scale",
	});
}

export default Component;
