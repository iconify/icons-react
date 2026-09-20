import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jch9lzdfa.css';
import '../../css/z/zfef1fbpu.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="jch9lzdfa"/><path class="zfef1fbpu"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:comet-off",
	});
}

export default Component;
