import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynthdoexc.css';
import '../../css/c/cgqnn9nff.css';
import '../../css/z/zhuau6b2h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ynthdoexc"/><path clip-rule="evenodd" class="cgqnn9nff"/><path class="zhuau6b2h"/></g>`,
		"fallback": "glyphs-poly:crop-1",
	});
}

export default Component;
