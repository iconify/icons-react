import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snt3n6ezt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snt3n6ezt"/>`,
		"fallback": "mdi:car-brake-retarder",
	});
}

export default Component;
