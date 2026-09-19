import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/h/hv815xsls.css';
import '../../css/l/lh7q19cgi.css';
import '../../css/a/azsq3dbbq.css';
import '../../css/n/nnezgqblu.css';
import '../../css/v/v_6a1lw_z.css';
import '../../css/d/duhft2bha.css';
import '../../css/s/secvykb5e.css';
import '../../css/e/e-pej0b8m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="hv815xsls"/><path clip-rule="evenodd" class="lh7q19cgi"/><path class="azsq3dbbq"/><path clip-rule="evenodd" class="nnezgqblu"/><path class="v_6a1lw_z"/></g><path clip-rule="evenodd" class="duhft2bha"/><path class="secvykb5e"/><path clip-rule="evenodd" class="e-pej0b8m"/></g>`,
		"fallback": "pepicons:crown-print",
	});
}

export default Component;
