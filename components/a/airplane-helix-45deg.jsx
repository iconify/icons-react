import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufie9ebgy.css';
import '../../css/l/llp5f-z2n.css';
import '../../css/w/w-mce9o4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufie9ebgy"><path class="llp5f-z2n"/><path clip-rule="evenodd" class="w-mce9o4q"/></g>`,
		"fallback": "iconoir:airplane-helix-45deg",
	});
}

export default Component;
