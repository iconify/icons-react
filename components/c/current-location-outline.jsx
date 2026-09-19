import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noy8qwcws.css';
import '../../css/v/vvvmsxc8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noy8qwcws"/><path clip-rule="evenodd" class="vvvmsxc8e"/>`,
		"fallback": "basil:current-location-outline",
	});
}

export default Component;
