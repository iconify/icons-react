import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us-5s8w3u.css';
import '../../css/d/du6sep0xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us-5s8w3u"/><path clip-rule="evenodd" class="du6sep0xm"/>`,
		"fallback": "solar:copyright-outline",
	});
}

export default Component;
