import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_y62ub1b.css';
import '../../css/g/go0ezbdtl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_y62ub1b"/><path class="go0ezbdtl"/>`,
		"fallback": "energy-icons:eye-off-48",
	});
}

export default Component;
