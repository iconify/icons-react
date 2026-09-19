import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mpbf21b5n.css';
import '../../css/e/e9umdvb8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mpbf21b5n"/><path class="e9umdvb8b"/></g>`,
		"fallback": "icon-park:go-ahead",
	});
}

export default Component;
