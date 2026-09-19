import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkkl__yfl.css';
import '../../css/l/lu4n9mjlt.css';
import '../../css/o/oar549etb.css';
import '../../css/q/q17vbsolz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkkl__yfl"/><path clip-rule="evenodd" class="lu4n9mjlt"/><path class="oar549etb"/><path clip-rule="evenodd" class="q17vbsolz"/></g>`,
		"fallback": "glyphs:filing-cabinet-outline",
	});
}

export default Component;
