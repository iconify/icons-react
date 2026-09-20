import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrt234bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrt234bhw"/>`,
		"fallback": "keyline-icons:circle-progress-play",
	});
}

export default Component;
