import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dlfsdvbll.css';
import '../../css/y/yuhc8jo4x.css';
import '../../css/x/xmr7rhb3p.css';
import '../../css/u/uo9rxdr_l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dlfsdvbll"/><path class="yuhc8jo4x"/><path clip-rule="evenodd" class="xmr7rhb3p"/><path class="uo9rxdr_l"/></g>`,
		"fallback": "glyphs-poly:dollar-bills",
	});
}

export default Component;
