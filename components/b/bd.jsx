import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zx184x6hd.css';
import '../../css/d/dir3f3b_n.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zx184x6hd"/><path clip-rule="evenodd" class="dir3f3b_n"/></g>`,
		"fallback": "flagpack:bd",
	});
}

export default Component;
