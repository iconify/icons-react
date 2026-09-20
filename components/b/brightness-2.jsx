import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zx-dsqblk.css';
import '../../css/l/l13735b4d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zx-dsqblk"/><path class="l13735b4d"/></g>`,
		"fallback": "streamline-color:brightness-2",
	});
}

export default Component;
