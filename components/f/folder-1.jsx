import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0vxb8b6n.css';
import '../../css/z/z8ia2hcik.css';
import '../../css/q/qj7vtlbpl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s0vxb8b6n"/><path class="z8ia2hcik"/><path clip-rule="evenodd" class="qj7vtlbpl"/></g>`,
		"fallback": "glyphs-poly:folder-1",
	});
}

export default Component;
