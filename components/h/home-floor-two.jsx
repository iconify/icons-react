import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hus_4bcbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hus_4bcbm"/>`,
		"fallback": "mdi:home-floor-two",
	});
}

export default Component;
