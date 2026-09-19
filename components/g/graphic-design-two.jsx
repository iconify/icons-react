import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m9nmhnevo.css';
import '../../css/e/en1312omp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="m9nmhnevo"/><path clip-rule="evenodd" class="en1312omp"/></g>`,
		"fallback": "icon-park:graphic-design-two",
	});
}

export default Component;
