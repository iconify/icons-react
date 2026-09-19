import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w5l36fhuc.css';
import '../../css/k/k8ta0qmcg.css';
import '../../css/p/pg1uithbf.css';
import '../../css/s/sxclq_x3o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w5l36fhuc"/><path class="k8ta0qmcg"/><path class="pg1uithbf"/><path class="sxclq_x3o"/></g>`,
		"fallback": "glyphs:die-1-outline",
	});
}

export default Component;
