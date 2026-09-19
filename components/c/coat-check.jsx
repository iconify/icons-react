import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5m1j1b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5m1j1b2r"/>`,
		"fallback": "grommet-icons:coat-check",
	});
}

export default Component;
