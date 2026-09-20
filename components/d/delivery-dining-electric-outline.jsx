import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyro86bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyro86bdy"/>`,
		"fallback": "mdi:delivery-dining-electric-outline",
	});
}

export default Component;
