import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf-0r8b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf-0r8b-e"/>`,
		"fallback": "mynaui:box",
	});
}

export default Component;
