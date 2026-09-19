import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xla6qubvq.css';
import '../../css/r/r73cul5cx.css';
import '../../css/w/w6lr59vyt.css';
import '../../css/a/as9-zc2xi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xla6qubvq"/><path clip-rule="evenodd" class="r73cul5cx"/><path clip-rule="evenodd" class="w6lr59vyt"/><path clip-rule="evenodd" class="as9-zc2xi"/></g>`,
		"fallback": "pepicons:cellphone-loop",
	});
}

export default Component;
