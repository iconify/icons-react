import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktqu5ebjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktqu5ebjv"/>`,
		"fallback": "ri:heart-3-fill",
	});
}

export default Component;
