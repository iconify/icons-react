import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6_2om8kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6_2om8kf"/>`,
		"fallback": "keyline-icons:face-neutral-fill",
	});
}

export default Component;
