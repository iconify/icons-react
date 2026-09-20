import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/ymb87aben.css';
import '../../css/v/vqaiqwb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ymb87aben"/><path class="vqaiqwb-e"/></g>`,
		"fallback": "lets-icons:folder-open-light",
	});
}

export default Component;
