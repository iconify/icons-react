import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ohmpddcnv.css';
import '../../css/j/jun0cu4td.css';
import '../../css/n/nhiwcxnik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ohmpddcnv wm-shadow"/><path class="jun0cu4td wm-shadow"/><path class="nhiwcxnik"/></g>`,
		"fallback": "withicons-brutal:dumbbell",
	});
}

export default Component;
