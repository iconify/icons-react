import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhy62g6ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yhy62g6ox"/>`,
		"fallback": "griddy-icons:calendar-off-filled",
	});
}

export default Component;
