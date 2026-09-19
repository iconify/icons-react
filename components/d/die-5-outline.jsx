import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/ftfhj4b0c.css';
import '../../css/k/k8ta0qmcg.css';
import '../../css/f/fvyp7-ged.css';
import '../../css/s/sxclq_x3o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ftfhj4b0c"/><path class="k8ta0qmcg"/><path class="fvyp7-ged"/><path class="sxclq_x3o"/></g>`,
		"fallback": "glyphs:die-5-outline",
	});
}

export default Component;
