import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dg493ubka.css';
import '../../css/p/psaycfbjl.css';
import '../../css/l/l6xg3zbkp.css';
import '../../css/q/qaqq91tal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dg493ubka"/><path class="psaycfbjl"/><path class="l6xg3zbkp"/><path class="qaqq91tal"/></g>`,
		"fallback": "andrsrxn:game-controller",
	});
}

export default Component;
