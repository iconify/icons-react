import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/je5vd7bsn.css';
import '../../css/i/i3s9_b4fi.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="je5vd7bsn"/><path clip-rule="evenodd" class="i3s9_b4fi"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:down-left-off",
	});
}

export default Component;
