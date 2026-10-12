import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v0ktk-1-q.css';
import '../../css/n/nw4f7abft.css';
import '../../css/o/ol-wxwb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v0ktk-1-q"/><path class="nw4f7abft"/><path class="ol-wxwb8o"/></g>`,
		"fallback": "lucide-extended:diamond-percent-duotone",
	});
}

export default Component;
