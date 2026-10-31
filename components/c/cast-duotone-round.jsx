import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w043ls85r.css';
import '../../css/f/flbrdsbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w043ls85r"/><path class="flbrdsbsk"/></g>`,
		"fallback": "coolicons:cast-duotone-round",
	});
}

export default Component;
