import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/z4wa8q0gl.css';
import '../../css/r/r1dzezbll.css';
import '../../css/w/w9lxmxb1b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="z4wa8q0gl"/><circle class="r1dzezbll"/><path class="w9lxmxb1b"/></g>`,
		"fallback": "garden:adjust-stroke-16",
	});
}

export default Component;
