import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-j76dbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-j76dbhh"/>`,
		"fallback": "mdi:import-export-bold",
	});
}

export default Component;
