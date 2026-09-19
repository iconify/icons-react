import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcazt4rfm.css';
import '../../css/b/bnjmyndfa.css';
import '../../css/d/dipsfvb4p.css';
import '../../css/d/d-h_ycbnd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bcazt4rfm"/><path class="bnjmyndfa"/><path clip-rule="evenodd" class="dipsfvb4p"/><path class="d-h_ycbnd"/></g>`,
		"fallback": "glyphs:campfire-outline",
	});
}

export default Component;
