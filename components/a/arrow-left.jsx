import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bd-t2zbjl.css';
import '../../css/u/utbixzbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="bd-t2zbjl"/><path class="utbixzbtu"/></g>`,
		"fallback": "matita:arrow-left",
	});
}

export default Component;
