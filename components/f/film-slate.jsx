import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d87ga2bkk.css';
import '../../css/z/zv4hzbbyt.css';
import '../../css/a/ay4t6qbmo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d87ga2bkk"/><path class="zv4hzbbyt"/><path class="ay4t6qbmo"/></g>`,
		"fallback": "streamline-flex-color:film-slate",
	});
}

export default Component;
