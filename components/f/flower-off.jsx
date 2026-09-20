import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ukuwhbr6n.css';
import '../../css/p/pr1xiiz-k.css';
import '../../css/u/ujme2c5vh.css';
import '../../css/p/pfx1hrb_z.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ukuwhbr6n"/><path class="pr1xiiz-k"/><path clip-rule="evenodd" class="ujme2c5vh"/><path clip-rule="evenodd" class="pfx1hrb_z"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:flower-off",
	});
}

export default Component;
