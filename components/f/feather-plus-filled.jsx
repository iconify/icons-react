import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgkic680g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgkic680g"/>`,
		"fallback": "boxicons:feather-plus-filled",
	});
}

export default Component;
