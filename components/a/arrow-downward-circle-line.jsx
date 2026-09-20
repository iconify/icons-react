import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drot4db0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drot4db0j"/>`,
		"fallback": "si:arrow-downward-circle-line",
	});
}

export default Component;
