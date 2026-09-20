import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs28jhbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs28jhbsm"/>`,
		"fallback": "lets-icons:3d-box",
	});
}

export default Component;
