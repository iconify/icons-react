import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v96x-abie.css';
import '../../css/r/ryxyorb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v96x-abie"/><path class="ryxyorb1r"/></g>`,
		"fallback": "streamline-sharp-color:battery-medium-3-flat",
	});
}

export default Component;
