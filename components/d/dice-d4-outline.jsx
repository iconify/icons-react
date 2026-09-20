import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksbafabbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksbafabbm"/>`,
		"fallback": "mdi:dice-d4-outline",
	});
}

export default Component;
