import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a39_n_r5c.css';
import '../../css/s/sedvqcojl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a39_n_r5c"/><path class="sedvqcojl"/></g>`,
		"fallback": "coolicons:bus-side-duotone-round",
	});
}

export default Component;
