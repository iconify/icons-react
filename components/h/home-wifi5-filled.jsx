import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha6m8geft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha6m8geft"/>`,
		"fallback": "reicon:home-wifi5-filled",
	});
}

export default Component;
