import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqol3ybqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqol3ybqy"/>`,
		"fallback": "mdi:favorite-settings",
	});
}

export default Component;
