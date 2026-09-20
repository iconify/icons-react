import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pplclmbsn.css';
import '../../css/c/clcfyob1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="pplclmbsn"/><path class="clcfyob1e"/></g>`,
		"fallback": "lets-icons:folder-up-light",
	});
}

export default Component;
