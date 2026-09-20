import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/ktxmo2-dm.css';
import '../../css/c/cppokfbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ktxmo2-dm"/><path class="cppokfbif"/></g>`,
		"fallback": "lets-icons:arhive-alt-export-light",
	});
}

export default Component;
