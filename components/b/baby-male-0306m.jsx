import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h1rb3sout.css';
import '../../css/n/n6a1_ep1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h1rb3sout"/><path class="n6a1_ep1i"/></g>`,
		"fallback": "healthicons:baby-male-0306m",
	});
}

export default Component;
