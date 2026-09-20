import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hw-5j8edp.css';
import '../../css/e/e0w1x5v0y.css';
import '../../css/i/iucnxxyud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hw-5j8edp"/><path class="e0w1x5v0y"/><path class="iucnxxyud"/></g>`,
		"fallback": "solar:gallery-favourite-line-duotone",
	});
}

export default Component;
