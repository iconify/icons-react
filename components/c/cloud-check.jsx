import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjlec9b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjlec9b_v"/>`,
		"fallback": "uil:cloud-check",
	});
}

export default Component;
