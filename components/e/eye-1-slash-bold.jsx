import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtubnabwv.css';
import '../../css/d/dhewf6b3g.css';
import '../../css/n/nxd3_8gtw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dtubnabwv"/><path class="dhewf6b3g"/><path clip-rule="evenodd" class="nxd3_8gtw"/></g>`,
		"fallback": "glyphs:eye-1-slash-bold",
	});
}

export default Component;
