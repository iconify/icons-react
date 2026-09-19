import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhpf8pbqq.css';
import '../../css/g/gdryfccos.css';
import '../../css/o/oxtw1expr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dhpf8pbqq"/><path clip-rule="evenodd" class="gdryfccos"/><path class="oxtw1expr"/></g>`,
		"fallback": "healthicons:eyeglasses",
	});
}

export default Component;
