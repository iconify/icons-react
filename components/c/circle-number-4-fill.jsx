import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jx7m1bbgd.css';
import '../../css/g/gb-ew8e1j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jx7m1bbgd"/><path clip-rule="evenodd" class="gb-ew8e1j"/></g>`,
		"fallback": "gravity-ui:circle-number-4-fill",
	});
}

export default Component;
