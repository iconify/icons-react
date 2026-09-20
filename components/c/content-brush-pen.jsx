import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fro3_tw4w.css';
import '../../css/l/lfzgj2bpk.css';
import '../../css/f/fnorhmrao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fro3_tw4w"/><path class="lfzgj2bpk"/><path class="fnorhmrao"/></g>`,
		"fallback": "streamline-freehand-color:content-brush-pen",
	});
}

export default Component;
