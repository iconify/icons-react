import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu-2u4b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu-2u4b_v"/>`,
		"fallback": "noviair:dice-5",
	});
}

export default Component;
