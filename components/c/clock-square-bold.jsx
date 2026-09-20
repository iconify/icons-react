import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9ex8-brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9ex8-brm"/>`,
		"fallback": "solar:clock-square-bold",
	});
}

export default Component;
