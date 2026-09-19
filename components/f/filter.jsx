import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9x0e21km.css';
import '../../css/v/vg6i_9qks.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r9x0e21km"/><path class="vg6i_9qks"/></g>`,
		"fallback": "glyphs-poly:filter",
	});
}

export default Component;
