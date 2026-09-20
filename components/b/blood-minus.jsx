import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uk0gr2bck.css';
import '../../css/l/l1rz5k9cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uk0gr2bck"/><path class="l1rz5k9cx"/></g>`,
		"fallback": "lets-icons:blood-minus",
	});
}

export default Component;
