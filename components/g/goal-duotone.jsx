import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw64u_b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary vw64u_b5h"/>`,
		"fallback": "iconaut:goal-duotone",
	});
}

export default Component;
