import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1d-wu-4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1d-wu-4l"/>`,
		"fallback": "keyline-icons:corner-right-up-fill",
	});
}

export default Component;
