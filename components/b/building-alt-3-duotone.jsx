import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilflw-89y.css';
import '../../css/c/cgrb-tvak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ilflw-89y"/><path class="cgrb-tvak"/></g>`,
		"fallback": "si:building-alt-3-duotone",
	});
}

export default Component;
