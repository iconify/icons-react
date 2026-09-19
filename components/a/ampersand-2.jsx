import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9r0tebbz.css';
import '../../css/v/vadgr9_-n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r9r0tebbz"/><path class="vadgr9_-n"/></g>`,
		"fallback": "glyphs-poly:ampersand-2",
	});
}

export default Component;
