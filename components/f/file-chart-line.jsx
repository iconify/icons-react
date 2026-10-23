import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/buzh9rbpl.css';
import '../../css/s/su2re0bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="buzh9rbpl"/><path class="su2re0bel"/></g>`,
		"fallback": "vadivam:file-chart-line",
	});
}

export default Component;
