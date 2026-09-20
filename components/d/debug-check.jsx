import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we2mvzuyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we2mvzuyp"/>`,
		"fallback": "pixelarticons:debug-check",
	});
}

export default Component;
