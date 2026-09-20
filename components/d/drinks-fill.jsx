import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nefux0p3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nefux0p3u"/>`,
		"fallback": "ri:drinks-fill",
	});
}

export default Component;
