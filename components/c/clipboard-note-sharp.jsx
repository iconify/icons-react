import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f41ybed1i.css';
import '../../css/m/m1x4wtgmy.css';
import '../../css/f/f9d6qcb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f41ybed1i"/><path class="m1x4wtgmy"/><path class="f9d6qcb-d"/></g>`,
		"fallback": "pixelarticons:clipboard-note-sharp",
	});
}

export default Component;
