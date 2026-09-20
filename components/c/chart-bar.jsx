import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0m8o8bnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0m8o8bnz"/>`,
		"fallback": "typcn:chart-bar",
	});
}

export default Component;
