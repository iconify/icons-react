import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nnccshiyx.css';
import '../../css/c/c7cra2b-g.css';
import '../../css/e/e0hfau-no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="nnccshiyx"/><path class="c7cra2b-g"/><path class="e0hfau-no"/></g>`,
		"fallback": "lets-icons:folder-alt-light",
	});
}

export default Component;
