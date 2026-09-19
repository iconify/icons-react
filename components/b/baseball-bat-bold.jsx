import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9pi01b-p.css';
import '../../css/c/cewtkj5-p.css';
import '../../css/t/tu2vxvb9y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u9pi01b-p"/><path class="cewtkj5-p"/><path class="tu2vxvb9y"/></g>`,
		"fallback": "glyphs:baseball-bat-bold",
	});
}

export default Component;
