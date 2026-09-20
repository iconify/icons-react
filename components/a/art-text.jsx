import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtyo55uzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtyo55uzz"/>`,
		"fallback": "pixelarticons:art-text",
	});
}

export default Component;
