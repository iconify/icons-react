import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha7uky3jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ha7uky3jy"/>`,
		"fallback": "solar:electric-refueling-outline",
	});
}

export default Component;
