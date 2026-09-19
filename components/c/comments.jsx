import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp28btbkx.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp28btbkx"/>`,
		"fallback": "zmdi:comments",
	});
}

export default Component;
