import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m2aoc-b8l.css';
import '../../css/r/r3yep8gbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m2aoc-b8l"/><path class="r3yep8gbg"/></g>`,
		"fallback": "iconamoon:check-circle-2-duotone",
	});
}

export default Component;
