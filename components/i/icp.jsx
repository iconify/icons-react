import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acmlgebjr.css';
import '../../css/m/md286fbip.css';
import '../../css/n/ng3m9n81q.css';
import '../../css/l/l53dll21x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="acmlgebjr"/><g class="md286fbip"><path class="ng3m9n81q"/><path class="l53dll21x"/></g></g>`,
		"fallback": "cryptocurrency-color:icp",
	});
}

export default Component;
