import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rlr8j9iso.css';
import '../../css/r/rb6407b-h.css';
import '../../css/w/w7cox2bpa.css';
import '../../css/a/akauz9zoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rlr8j9iso"/><path class="rb6407b-h"/><path class="w7cox2bpa"/><ellipse class="akauz9zoh"/></g>`,
		"fallback": "andrsrxn:currency-exchange",
	});
}

export default Component;
