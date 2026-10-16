import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9zy-tb7n.css';
import '../../css/l/l8fxrac6r.css';
import '../../css/y/y7wfvrbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9zy-tb7n"/><rect class="l8fxrac6r"/><path class="y7wfvrbko"/></g>`,
		"fallback": "andrsrxn:browser",
	});
}

export default Component;
