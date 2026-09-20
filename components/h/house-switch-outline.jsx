import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiih3sb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiih3sb4l"/>`,
		"fallback": "mdi:house-switch-outline",
	});
}

export default Component;
