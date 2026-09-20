import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yy0kmdbfn.css';
import '../../css/b/byeqgth4o.css';
import '../../css/d/d-mdo3b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yy0kmdbfn"/><path class="byeqgth4o"/><path class="d-mdo3b_g"/></g>`,
		"fallback": "streamline-freehand-color:fax-machine-paper-print",
	});
}

export default Component;
