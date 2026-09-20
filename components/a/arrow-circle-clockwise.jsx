import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n55x42a9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n55x42a9d"/>`,
		"fallback": "nrk:arrow-circle-clockwise",
	});
}

export default Component;
