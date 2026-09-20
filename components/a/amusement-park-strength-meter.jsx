import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tte7b4f3i.css';
import '../../css/y/y_eo9acim.css';
import '../../css/o/oc8vs8bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tte7b4f3i"/><path class="y_eo9acim"/><path class="oc8vs8bfw"/></g>`,
		"fallback": "streamline-freehand-color:amusement-park-strength-meter",
	});
}

export default Component;
