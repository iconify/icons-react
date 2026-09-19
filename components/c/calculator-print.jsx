import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mqxji9yws.css';
import '../../css/o/otvmc61gw.css';
import '../../css/n/ngxz40b9g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mqxji9yws"/><path clip-rule="evenodd" class="otvmc61gw"/><path class="ngxz40b9g"/></g>`,
		"fallback": "pepicons:calculator-print",
	});
}

export default Component;
