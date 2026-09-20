import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a5vx24o9r.css';
import '../../css/u/uzp5_6bsa.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="a5vx24o9r"/><path class="uzp5_6bsa"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:file-loop-off",
	});
}

export default Component;
