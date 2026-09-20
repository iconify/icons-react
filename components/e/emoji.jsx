import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7fv2d15r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7fv2d15r"/>`,
		"fallback": "uil:emoji",
	});
}

export default Component;
