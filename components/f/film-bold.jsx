import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uj97p-b6g.css';
import '../../css/b/b7j5l8r0t.css';
import '../../css/a/abvn24pzd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uj97p-b6g"/><path clip-rule="evenodd" class="b7j5l8r0t"/><path class="abvn24pzd"/></g>`,
		"fallback": "glyphs:film-bold",
	});
}

export default Component;
