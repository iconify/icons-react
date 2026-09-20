import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oto60ts8x.css';
import '../../css/b/bo7oo35sp.css';
import '../../css/r/r_1ey_bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oto60ts8x"/><path class="bo7oo35sp"/><path class="r_1ey_bjv"/></g>`,
		"fallback": "streamline-freehand-color:composition-man",
	});
}

export default Component;
