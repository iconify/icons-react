import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqpn7gbgl.css';
import '../../css/a/a8vqvqb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqpn7gbgl"/><path class="a8vqvqb-f"/></g>`,
		"fallback": "majesticons:glas-water",
	});
}

export default Component;
