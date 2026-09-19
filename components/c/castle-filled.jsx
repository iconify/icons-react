import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_mxh8b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_mxh8b8i"/>`,
		"fallback": "boxicons:castle-filled",
	});
}

export default Component;
