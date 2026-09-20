import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf3q7_mjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf3q7_mjn"/>`,
		"fallback": "mdi:horseshoe",
	});
}

export default Component;
