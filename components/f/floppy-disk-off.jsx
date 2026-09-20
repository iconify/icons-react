import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4aw4xbir.css';
import '../../css/f/fmg0zibqy.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e4aw4xbir"/><path clip-rule="evenodd" class="fmg0zibqy"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:floppy-disk-off",
	});
}

export default Component;
