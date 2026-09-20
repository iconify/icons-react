import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b53r-kbxl.css';
import '../../css/x/x_6_7pssw.css';
import '../../css/w/w-zh29bfx.css';
import '../../css/t/ttah5ul5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b53r-kbxl"/><path class="x_6_7pssw"/><path class="w-zh29bfx"/><path class="ttah5ul5h"/></g>`,
		"fallback": "streamline-freehand-color:design-process-drawing-board-education",
	});
}

export default Component;
