import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cw36_6mco.css';
import '../../css/l/lw3ir5-go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cw36_6mco wm-a"/><path class="lw3ir5-go"/></g>`,
		"fallback": "withicons:chart-scatter",
	});
}

export default Component;
