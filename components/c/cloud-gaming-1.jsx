import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1qcbo17t.css';
import '../../css/p/p7-x1b1cr.css';
import '../../css/m/md_pd-bda.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h1qcbo17t"/><path class="p7-x1b1cr"/><path class="md_pd-bda"/></g>`,
		"fallback": "streamline-color:cloud-gaming-1",
	});
}

export default Component;
