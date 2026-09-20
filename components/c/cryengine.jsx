import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gozsv_iaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gozsv_iaq"/>`,
		"fallback": "mdi:cryengine",
	});
}

export default Component;
