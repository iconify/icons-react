import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhor8i0dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhor8i0dv"/>`,
		"fallback": "boxicons:filter-filled",
	});
}

export default Component;
