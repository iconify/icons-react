import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jcvvnm9up.css';
import '../../css/s/s083vxo4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jcvvnm9up"/><path clip-rule="evenodd" class="s083vxo4v"/></g>`,
		"fallback": "solar:cloud-file-bold",
	});
}

export default Component;
