import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tsy67xnzp.css';
import '../../css/a/azf_o3ixs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="tsy67xnzp"/><path class="azf_o3ixs"/></g>`,
		"fallback": "lets-icons:arhive-alt-small-light",
	});
}

export default Component;
