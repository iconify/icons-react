import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oirm5y_yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oirm5y_yo"/>`,
		"fallback": "boxicons:hdmi-filled",
	});
}

export default Component;
