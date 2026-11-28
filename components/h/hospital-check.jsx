import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyabm2p2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyabm2p2f"/>`,
		"fallback": "noviair-light:hospital-check",
	});
}

export default Component;
