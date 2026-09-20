import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/htvod5bir.css';
import '../../css/a/aewx8hb7s.css';
import '../../css/l/lpt3adcma.css';
import '../../css/k/k4omzib4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="htvod5bir"/><path class="aewx8hb7s"/><path class="lpt3adcma"/><path class="k4omzib4o"/></g>`,
		"fallback": "streamline-sharp-color:drawing-compass",
	});
}

export default Component;
