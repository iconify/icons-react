import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eqsoerslw.css';
import '../../css/u/ucjbm9bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eqsoerslw"/><path class="ucjbm9bpz"/></g>`,
		"fallback": "streamline-freehand-color:design-tool-brush-ruler",
	});
}

export default Component;
