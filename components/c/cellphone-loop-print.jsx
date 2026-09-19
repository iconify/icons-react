import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/p/pkkhx8b1k.css';
import '../../css/u/ub2yfbbwy.css';
import '../../css/s/shj1u_aun.css';
import '../../css/w/w7k2ezb7s.css';
import '../../css/x/xla6qubvq.css';
import '../../css/r/r73cul5cx.css';
import '../../css/l/l5pgo6l-u.css';
import '../../css/e/er2xuwbrn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="pkkhx8b1k"/><path clip-rule="evenodd" class="ub2yfbbwy"/><path class="shj1u_aun"/><path clip-rule="evenodd" class="w7k2ezb7s"/></g><path class="xla6qubvq"/><path clip-rule="evenodd" class="r73cul5cx"/><path clip-rule="evenodd" class="l5pgo6l-u"/><path clip-rule="evenodd" class="er2xuwbrn"/></g>`,
		"fallback": "pepicons:cellphone-loop-print",
	});
}

export default Component;
