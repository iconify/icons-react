import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/caqoh7b2t.css';
import '../../css/p/priyyfbwu.css';
import '../../css/q/q3qd3kbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="caqoh7b2t"/><path class="priyyfbwu"/><path clip-rule="evenodd" class="q3qd3kbam"/></g>`,
		"fallback": "solar:cpu-bolt-bold-duotone",
	});
}

export default Component;
