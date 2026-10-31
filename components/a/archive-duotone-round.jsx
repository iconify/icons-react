import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amk230bfn.css';
import '../../css/f/fyq8p0too.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="amk230bfn"/><path class="fyq8p0too"/></g>`,
		"fallback": "coolicons:archive-duotone-round",
	});
}

export default Component;
