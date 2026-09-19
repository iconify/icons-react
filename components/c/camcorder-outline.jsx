import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h53hy5b3q.css';
import '../../css/u/uuo7n4xwg.css';
import '../../css/n/nvwe-vbgl.css';
import '../../css/z/znan2-a4g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h53hy5b3q"/><path clip-rule="evenodd" class="uuo7n4xwg"/><path class="nvwe-vbgl"/><path clip-rule="evenodd" class="znan2-a4g"/></g>`,
		"fallback": "glyphs:camcorder-outline",
	});
}

export default Component;
