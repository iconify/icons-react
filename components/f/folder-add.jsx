import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgqskh4kt.css';
import '../../css/j/j6tc0fsaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kgqskh4kt"/><path class="j6tc0fsaw"/></g>`,
		"fallback": "proicons:folder-add",
	});
}

export default Component;
