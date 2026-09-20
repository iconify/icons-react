import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/osbldktkr.css';
import '../../css/n/nqmqffbvv.css';
import '../../css/d/dytwysbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="osbldktkr"/><path class="nqmqffbvv"/><path class="dytwysbcm"/></g>`,
		"fallback": "reicon:gamepad-charge-duotone",
	});
}

export default Component;
