import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rk_d9jdgt.css';
import '../../css/f/fnqp5ja6e.css';
import '../../css/l/l97qv2b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rk_d9jdgt"/><path class="fnqp5ja6e"/><path class="l97qv2b4o"/></g>`,
		"fallback": "andrsrxn:brain-sparkle",
	});
}

export default Component;
