import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dthu5j0fn.css';
import '../../css/g/gpcclie-k.css';
import '../../css/m/mmh2udtee.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dthu5j0fn"/><path clip-rule="evenodd" class="gpcclie-k"/><path clip-rule="evenodd" class="mmh2udtee"/></g>`,
		"fallback": "streamline-color:ice-cream-2-flat",
	});
}

export default Component;
