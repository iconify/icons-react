import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0cnu-b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y0cnu-b_v"/>`,
		"fallback": "griddy-icons:face-neutral",
	});
}

export default Component;
