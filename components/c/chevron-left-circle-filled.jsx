import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_q4f9j6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_q4f9j6s"/>`,
		"fallback": "tdesign:chevron-left-circle-filled",
	});
}

export default Component;
