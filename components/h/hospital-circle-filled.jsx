import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqi5v1bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqi5v1bhf"/>`,
		"fallback": "tabler:hospital-circle-filled",
	});
}

export default Component;
