import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xao59bcgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xao59bcgd"/>`,
		"fallback": "iconoir:bell-notification",
	});
}

export default Component;
