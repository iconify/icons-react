import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/gtnoc3_rf.css';
import '../../css/c/cjuj82b2h.css';
import '../../css/x/x5qczv75w.css';
import '../../css/p/paoo7fbxe.css';
import '../../css/f/fhryxrb5j.css';
import '../../css/w/wpjik2bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="gtnoc3_rf"/><path class="cjuj82b2h"/><path class="x5qczv75w"/></g><path clip-rule="evenodd" class="paoo7fbxe"/><path clip-rule="evenodd" class="fhryxrb5j"/><path clip-rule="evenodd" class="wpjik2bgy"/></g>`,
		"fallback": "solar:git-graph-bold-duotone",
	});
}

export default Component;
