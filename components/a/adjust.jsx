import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7rof_xzg.css';
import '../../css/r/ry4xkfx6l.css';
import '../../css/i/ijc812t3e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7rof_xzg"/><path clip-rule="evenodd" class="ry4xkfx6l"/><path clip-rule="evenodd" class="ijc812t3e"/></g>`,
		"fallback": "glyphs-poly:adjust",
	});
}

export default Component;
