import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9skfif3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9skfif3v"/>`,
		"fallback": "ri:collapse-diagonal-2-fill",
	});
}

export default Component;
