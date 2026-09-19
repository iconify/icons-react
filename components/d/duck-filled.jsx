import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm5sbg_7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm5sbg_7m"/>`,
		"fallback": "boxicons:duck-filled",
	});
}

export default Component;
