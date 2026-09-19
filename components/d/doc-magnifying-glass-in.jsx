import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u3uh19bmf.css';
import '../../css/l/lkliae68h.css';
import '../../css/y/ysqi2pc_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u3uh19bmf"/><path class="lkliae68h"/><path class="ysqi2pc_u"/></g>`,
		"fallback": "iconoir:doc-magnifying-glass-in",
	});
}

export default Component;
