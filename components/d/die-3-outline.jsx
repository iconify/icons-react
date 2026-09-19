import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mbt7znpoq.css';
import '../../css/k/k8ta0qmcg.css';
import '../../css/w/wz-2tiais.css';
import '../../css/s/sxclq_x3o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mbt7znpoq"/><path class="k8ta0qmcg"/><path class="wz-2tiais"/><path class="sxclq_x3o"/></g>`,
		"fallback": "glyphs:die-3-outline",
	});
}

export default Component;
