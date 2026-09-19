import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ow27j2bwb.css';
import '../../css/d/dlek5ngpu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ow27j2bwb"/><path clip-rule="evenodd" class="dlek5ngpu"/></g>`,
		"fallback": "glyphs:bus-bold",
	});
}

export default Component;
