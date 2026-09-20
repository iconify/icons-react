import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yaooukbzi.css';
import '../../css/e/e-ozcvbwb.css';
import '../../css/g/gzuh-4bwa.css';
import '../../css/w/wti0f6p-c.css';
import '../../css/m/mi_j5cbct.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yaooukbzi"/><path class="e-ozcvbwb"/><path clip-rule="evenodd" class="gzuh-4bwa"/><path clip-rule="evenodd" class="wti0f6p-c"/><path class="mi_j5cbct"/></g>`,
		"fallback": "streamline-flex-color:chess-king",
	});
}

export default Component;
