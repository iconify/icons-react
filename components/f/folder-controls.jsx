import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hglhznswv.css';
import '../../css/i/io8ey1b6c.css';
import '../../css/j/ji2eu13ia.css';
import '../../css/u/uf8-rcbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hglhznswv"/><path class="io8ey1b6c"/><circle class="ji2eu13ia"/><circle class="uf8-rcbtk"/></g>`,
		"fallback": "andrsrxn:folder-controls",
	});
}

export default Component;
