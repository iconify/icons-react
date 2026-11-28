import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l7nm2qbhd.css';
import '../../css/r/rjuka2byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l7nm2qbhd"/><path class="rjuka2byu"/></g>`,
		"fallback": "iconaut:blend",
	});
}

export default Component;
