import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njaw6lxwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njaw6lxwp"/>`,
		"fallback": "mdi:alert-octagram-outline",
	});
}

export default Component;
