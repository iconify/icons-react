import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2q3-9bye.css';
import '../../css/z/zbzhdcacm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2q3-9bye"/><path class="zbzhdcacm"/>`,
		"fallback": "circum:import",
	});
}

export default Component;
