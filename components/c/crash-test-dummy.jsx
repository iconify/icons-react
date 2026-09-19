import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ik98foc_o.css';
import '../../css/a/afmd_sbep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ik98foc_o"/><path class="afmd_sbep"/></g>`,
		"fallback": "at-icons:crash-test-dummy",
	});
}

export default Component;
