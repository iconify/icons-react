import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhuo4vx2c.css';
import '../../css/v/vr05q2bdj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dhuo4vx2c"/><path class="vr05q2bdj"/></g>`,
		"fallback": "glyphs:grin-tears-bold",
	});
}

export default Component;
