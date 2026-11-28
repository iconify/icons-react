import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfm6tob8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary rfm6tob8a"/>`,
		"fallback": "iconaut:bed-bunk-duotone",
	});
}

export default Component;
