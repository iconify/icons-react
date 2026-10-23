import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_83c4b-g.css';
import '../../css/o/ol891hb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e_83c4b-g"/><path class="ol891hb7t"/></g>`,
		"fallback": "vadivam:bus",
	});
}

export default Component;
