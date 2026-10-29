import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dfr8kabwp.css';
import '../../css/o/omdwggbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dfr8kabwp"/><path class="omdwggbcq wm-a"/></g>`,
		"fallback": "withicons:bitcoin-duo",
	});
}

export default Component;
