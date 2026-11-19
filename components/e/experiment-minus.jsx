import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl7nbhbyz.css';
import '../../css/b/b1vvirfgs.css';
import '../../css/q/qrfu-jtve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bl7nbhbyz"/><path class="b1vvirfgs"/><path class="qrfu-jtve"/></g>`,
		"fallback": "andrsrxn:experiment-minus",
	});
}

export default Component;
