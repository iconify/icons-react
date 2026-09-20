import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpsf3pb4n.css';
import '../../css/e/e2e0izgmx.css';
import '../../css/x/x20t8wbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpsf3pb4n"/><path class="e2e0izgmx"/><path class="x20t8wbfm"/></g>`,
		"fallback": "reicon:circle-sort-h-duotone",
	});
}

export default Component;
