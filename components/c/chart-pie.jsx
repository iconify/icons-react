import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzjr0cb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzjr0cb5r"/>`,
		"fallback": "prime:chart-pie",
	});
}

export default Component;
