import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pz07x8bnt.css';
import '../../css/y/y2vb5fbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pz07x8bnt"/><path class="y2vb5fbgy"/></g>`,
		"fallback": "reicon:diagram-up-filled",
	});
}

export default Component;
