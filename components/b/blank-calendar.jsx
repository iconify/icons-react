import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/seykvkn8r.css';
import '../../css/d/ds9hzkbzu.css';
import '../../css/u/uhzobyyzz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="seykvkn8r"/><path class="ds9hzkbzu"/><path class="uhzobyyzz"/></g>`,
		"fallback": "streamline-color:blank-calendar",
	});
}

export default Component;
