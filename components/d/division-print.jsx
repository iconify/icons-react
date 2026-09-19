import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/p/pnbxzjb2y.css';
import '../../css/u/ux9pwvqah.css';
import '../../css/x/x6tlt5s8q.css';
import '../../css/d/dqrzf1bnz.css';
import '../../css/f/f7k5plbuz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="pnbxzjb2y"/><circle class="ux9pwvqah"/><circle class="x6tlt5s8q"/></g><path class="dqrzf1bnz"/><path clip-rule="evenodd" class="f7k5plbuz"/></g>`,
		"fallback": "pepicons:division-print",
	});
}

export default Component;
