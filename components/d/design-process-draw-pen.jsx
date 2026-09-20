import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o25gd6bvp.css';
import '../../css/v/vhqxg0bai.css';
import '../../css/u/ue554cbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o25gd6bvp"/><path class="vhqxg0bai"/><path class="ue554cbvu"/></g>`,
		"fallback": "streamline-freehand-color:design-process-draw-pen",
	});
}

export default Component;
