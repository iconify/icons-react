import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbb5-g-jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbb5-g-jo"/>`,
		"fallback": "mdi:education",
	});
}

export default Component;
