import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmkih5h5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmkih5h5n"/>`,
		"fallback": "boxicons:eraser",
	});
}

export default Component;
