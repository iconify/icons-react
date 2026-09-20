import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nig-dl-ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nig-dl-ab"/>`,
		"fallback": "ri:bus-line",
	});
}

export default Component;
