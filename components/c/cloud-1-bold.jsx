import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m64gzw_kk.css';
import '../../css/b/bdvnc1vsi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m64gzw_kk"/><path class="bdvnc1vsi"/></g>`,
		"fallback": "glyphs:cloud-1-bold",
	});
}

export default Component;
