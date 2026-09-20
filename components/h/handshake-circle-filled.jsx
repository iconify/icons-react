import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/dgp5bp7mg.css';
import '../../css/x/x4mv-7s-h.css';
import '../../css/y/ywrsrb7ne.css';
import '../../css/l/lsen5obiz.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="dgp5bp7mg"/><path clip-rule="evenodd" class="x4mv-7s-h"/><path class="ywrsrb7ne"/><path clip-rule="evenodd" class="lsen5obiz"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:handshake-circle-filled",
	});
}

export default Component;
