import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9keycb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9keycb_s"/>`,
		"fallback": "boxicons:arrow-from-right-filled",
	});
}

export default Component;
