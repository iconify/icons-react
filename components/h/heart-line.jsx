import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3xl0p8yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3xl0p8yu"/>`,
		"fallback": "ri:heart-line",
	});
}

export default Component;
