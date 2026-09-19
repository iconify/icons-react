import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0h-smbqd.css';
import '../../css/d/dlr0psbka.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q0h-smbqd"/><path clip-rule="evenodd" class="dlr0psbka"/></g>`,
		"fallback": "glyphs:folder-open-1-bold",
	});
}

export default Component;
