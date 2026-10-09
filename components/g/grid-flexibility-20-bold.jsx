import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u364xbb6d.css';
import '../../css/i/ilw_03s_n.css';
import '../../css/e/e23at5bmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u364xbb6d"/><path class="ilw_03s_n"/><path class="e23at5bmd"/>`,
		"fallback": "energy-icons:grid-flexibility-20-bold",
	});
}

export default Component;
