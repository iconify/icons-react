import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-qnyfbkx.css';
import '../../css/v/v5eporb6g.css';
import '../../css/g/g_am8gbls.css';
import '../../css/j/jq5uyub0t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d-qnyfbkx"/><path class="v5eporb6g"/><path class="g_am8gbls"/><path class="jq5uyub0t"/></g>`,
		"fallback": "glyphs:arrows-round-bold",
	});
}

export default Component;
