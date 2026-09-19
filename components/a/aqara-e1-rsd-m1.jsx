import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k393ltima.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k393ltima"/>`,
		"fallback": "cbi:aqara-e1-rsd-m1",
	});
}

export default Component;
