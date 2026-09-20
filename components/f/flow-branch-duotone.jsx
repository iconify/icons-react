import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9py53b8l.css';
import '../../css/i/ii4ljhbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c9py53b8l"/><path class="ii4ljhbwb"/></g>`,
		"fallback": "si:flow-branch-duotone",
	});
}

export default Component;
