import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ueotyd6eo.css';
import '../../css/m/md286fbip.css';
import '../../css/v/ven97ur9o.css';
import '../../css/v/vsuxv3bqv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ueotyd6eo"/><g class="md286fbip"><path class="ven97ur9o"/><path class="vsuxv3bqv"/></g></g>`,
		"fallback": "cryptocurrency-color:arg",
	});
}

export default Component;
