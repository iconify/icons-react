import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvd2-0vsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvd2-0vsm"/>`,
		"fallback": "ri:disc-fill",
	});
}

export default Component;
