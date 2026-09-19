import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a3x0u_b2g.css';
import '../../css/y/yev7me0jl.css';
import '../../css/l/l38-skyep.css';
import '../../css/h/h71ihjbka.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a3x0u_b2g"/><path class="yev7me0jl"/><path class="l38-skyep"/><path class="h71ihjbka"/></g>`,
		"fallback": "glyphs:caret-circle-outline",
	});
}

export default Component;
