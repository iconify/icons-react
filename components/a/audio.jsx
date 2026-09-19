import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtm8-702u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtm8-702u"/>`,
		"fallback": "gridicons:audio",
	});
}

export default Component;
