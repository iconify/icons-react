import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc5dnkb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc5dnkb4l"/>`,
		"fallback": "uil:house-user",
	});
}

export default Component;
