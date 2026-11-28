import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1j71ccor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1j71ccor primary"/>`,
		"fallback": "iconaut:braces-duotone",
	});
}

export default Component;
