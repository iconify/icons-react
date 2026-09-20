import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxh_o_bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxh_o_bia"/>`,
		"fallback": "uil:analytics",
	});
}

export default Component;
