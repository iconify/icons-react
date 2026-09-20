import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zg1it3j5p.css';
import '../../css/g/g1fnoac-l.css';
import '../../css/d/d0qq7oxcw.css';
import '../../css/n/nv3r1zbmr.css';
import '../../css/k/k7ycrutox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zg1it3j5p"/><path class="g1fnoac-l"/><rect class="d0qq7oxcw"/><circle class="nv3r1zbmr"/><circle class="k7ycrutox"/></g>`,
		"fallback": "lucide:baggage-claim",
	});
}

export default Component;
