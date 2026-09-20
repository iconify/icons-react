import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqgpj95pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqgpj95pj"/>`,
		"fallback": "mdi:high-occupancy-vehicle-lane-outline",
	});
}

export default Component;
