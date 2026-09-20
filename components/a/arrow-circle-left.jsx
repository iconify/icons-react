import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te0_z2frq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te0_z2frq"/>`,
		"fallback": "uis:arrow-circle-left",
	});
}

export default Component;
