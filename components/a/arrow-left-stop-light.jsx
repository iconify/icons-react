import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0if885wv.css';
import '../../css/g/glsncsbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i0if885wv"/><path class="glsncsbbg"/></g>`,
		"fallback": "lets-icons:arrow-left-stop-light",
	});
}

export default Component;
