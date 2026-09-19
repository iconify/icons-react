import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mggrdsrzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mggrdsrzf"/>`,
		"fallback": "griddy-icons:fire-extinguisher-filled",
	});
}

export default Component;
