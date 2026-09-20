import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycucybb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycucybb_u"/>`,
		"fallback": "keyline-icons:arrow-big-left-fill",
	});
}

export default Component;
