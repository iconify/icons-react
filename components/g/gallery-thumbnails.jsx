import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnq5owb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnq5owb5v"/>`,
		"fallback": "boxicons:gallery-thumbnails",
	});
}

export default Component;
