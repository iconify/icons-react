import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9g0gvvce.css';
import '../../css/j/j6g30jbys.css';
import '../../css/q/q24x7obey.css';
import '../../css/v/v53__abmp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v9g0gvvce"/><path clip-rule="evenodd" class="j6g30jbys"/><path clip-rule="evenodd" class="q24x7obey"/><path class="v53__abmp"/></g>`,
		"fallback": "glyphs-poly:bell-add",
	});
}

export default Component;
