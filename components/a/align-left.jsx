import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cwpkoubta.css';
import '../../css/e/egwsdufji.css';
import '../../css/e/e505by-fl.css';
import '../../css/r/r4lr0sp0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="cwpkoubta"/><path class="egwsdufji"/><path class="e505by-fl"/><path class="r4lr0sp0y"/></g>`,
		"fallback": "matita:align-left",
	});
}

export default Component;
