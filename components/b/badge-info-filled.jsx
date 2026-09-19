import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy0s7rb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy0s7rb0s"/>`,
		"fallback": "boxicons:badge-info-filled",
	});
}

export default Component;
