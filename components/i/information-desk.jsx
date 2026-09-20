import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wy9y5naby.css';
import '../../css/q/qt392mi1w.css';
import '../../css/k/k4p-mx6zk.css';
import '../../css/d/d9tj3eb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wy9y5naby"/><path class="qt392mi1w"/><path class="k4p-mx6zk"/><path class="d9tj3eb5d"/></g>`,
		"fallback": "streamline-freehand-color:information-desk",
	});
}

export default Component;
