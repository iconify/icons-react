import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyu5r4bdv.css';
import '../../css/p/pyral_92n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyu5r4bdv"/><path class="pyral_92n"/>`,
		"fallback": "boxicons:copyright",
	});
}

export default Component;
