import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_64qcbbb.css';
import '../../css/p/pd--17gqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r_64qcbbb"/><path class="pd--17gqn"/></g>`,
		"fallback": "si:clipboard-check-duotone",
	});
}

export default Component;
