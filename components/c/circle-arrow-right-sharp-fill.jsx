import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0prbgdln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0prbgdln"/>`,
		"fallback": "keyline-icons:circle-arrow-right-sharp-fill",
	});
}

export default Component;
