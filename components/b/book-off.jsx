import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j062rccnk.css';
import '../../css/w/wobnozssh.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j062rccnk"/><path clip-rule="evenodd" class="wobnozssh"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:book-off",
	});
}

export default Component;
