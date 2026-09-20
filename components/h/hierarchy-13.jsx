import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-582ca3o.css';
import '../../css/n/noday0bxt.css';
import '../../css/d/dban-_bga.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q-582ca3o"/><path class="noday0bxt"/><path class="dban-_bga"/></g>`,
		"fallback": "streamline-color:hierarchy-13",
	});
}

export default Component;
