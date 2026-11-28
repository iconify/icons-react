import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu_3q2bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu_3q2bre"/>`,
		"fallback": "iconaut:helmet-solid",
	});
}

export default Component;
