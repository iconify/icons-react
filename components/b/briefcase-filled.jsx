import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hklz-72lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hklz-72lg"/>`,
		"fallback": "boxicons:briefcase-filled",
	});
}

export default Component;
