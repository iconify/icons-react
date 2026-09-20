import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/f/f2gpx3bim.css';
import '../../css/v/v0bh_-0sc.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="f2gpx3bim"/><path class="v0bh_-0sc"/></g>`,
		"fallback": "system-uicons:enter-alt",
	});
}

export default Component;
