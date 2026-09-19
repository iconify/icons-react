import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2-tg4hoq.css';

const viewBox = {"width":224,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2-tg4hoq"/>`,
		"fallback": "zmdi:facebook",
	});
}

export default Component;
