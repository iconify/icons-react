import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uo_jzrbcw.css';
import '../../css/r/rkvs44b-z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uo_jzrbcw"/><path clip-rule="evenodd" class="rkvs44b-z"/></g>`,
		"fallback": "gravity-ui:circle-number-0-fill",
	});
}

export default Component;
