import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbm8uzbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbm8uzbwi"/>`,
		"fallback": "mdi:adb",
	});
}

export default Component;
