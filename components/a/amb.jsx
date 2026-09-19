import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2bp4fb-o.css';
import '../../css/b/bfr5t1byz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="h2bp4fb-o"/><path class="bfr5t1byz"/></g>`,
		"fallback": "cryptocurrency-color:amb",
	});
}

export default Component;
