import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h872etvtl.css';
import '../../css/d/di5khpb4x.css';
import '../../css/x/x4h1atbqm.css';
import '../../css/k/kd1qlvbsr.css';
import '../../css/i/i19ohz5-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h872etvtl"/><path class="di5khpb4x"/><path class="x4h1atbqm"/><path class="kd1qlvbsr"/><path class="i19ohz5-h"/></g>`,
		"fallback": "andrsrxn:film-sparkle",
	});
}

export default Component;
