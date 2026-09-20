import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8dq8-bvw.css';
import '../../css/k/k03zjcbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8dq8-bvw"/><path class="k03zjcbat"/></g>`,
		"fallback": "lets-icons:flag-duotone",
	});
}

export default Component;
