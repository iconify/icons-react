import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cyyqt0pzv.css';
import '../../css/s/shua_zbkq.css';
import '../../css/x/xp50n6b6u.css';
import '../../css/t/t03j23bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cyyqt0pzv"/><path class="shua_zbkq"/><path class="xp50n6b6u"/><path class="t03j23bmc"/></g>`,
		"fallback": "streamline-freehand-color:check-payment-sign",
	});
}

export default Component;
