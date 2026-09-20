import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sam3i1beg.css';
import '../../css/a/ag59na-ob.css';
import '../../css/f/fs1zdp3zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sam3i1beg"/><path class="ag59na-ob"/><path class="fs1zdp3zn"/></g>`,
		"fallback": "reicon:diploma-filled",
	});
}

export default Component;
