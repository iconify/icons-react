import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/atp1nsm2c.css';
import '../../css/t/tx9gm0q4q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="atp1nsm2c"/><path class="tx9gm0q4q"/></g>`,
		"fallback": "glyphs:handshake-bold",
	});
}

export default Component;
