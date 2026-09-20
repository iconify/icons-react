import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmq22nb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmq22nb0e"/>`,
		"fallback": "lets-icons:horizontal-switch-light",
	});
}

export default Component;
