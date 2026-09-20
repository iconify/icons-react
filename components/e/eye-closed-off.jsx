import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fpmem3w0t.css';
import '../../css/n/ng9vtx4ft.css';
import '../../css/h/h4t313bie.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fpmem3w0t"/><path class="ng9vtx4ft"/><path class="h4t313bie"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:eye-closed-off",
	});
}

export default Component;
