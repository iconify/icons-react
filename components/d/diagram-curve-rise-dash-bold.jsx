import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5li1g69r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5li1g69r"/>`,
		"fallback": "streamline-ultimate:diagram-curve-rise-dash-bold",
	});
}

export default Component;
