import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ytz0ut1_u.css';
import '../../css/f/fk4b5hbia.css';
import '../../css/r/rz7rw1bdv.css';
import '../../css/h/hf95ks11o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ytz0ut1_u"/><path class="fk4b5hbia"/><path class="rz7rw1bdv"/><path class="hf95ks11o"/></g>`,
		"fallback": "streamline-freehand-color:graphic-tablet-draw-1",
	});
}

export default Component;
