import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d3jgf7b5x.css';
import '../../css/f/fm8ha9brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d3jgf7b5x"/><path class="fm8ha9brp"/></g>`,
		"fallback": "tabler:diaper",
	});
}

export default Component;
