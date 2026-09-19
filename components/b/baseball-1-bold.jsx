import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5pt0aclp.css';
import '../../css/g/g3u0jliin.css';
import '../../css/b/bj1z3ub6e.css';
import '../../css/h/hcbngtbcs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z5pt0aclp"/><path class="g3u0jliin"/><path class="bj1z3ub6e"/><path class="hcbngtbcs"/></g>`,
		"fallback": "glyphs:baseball-1-bold",
	});
}

export default Component;
