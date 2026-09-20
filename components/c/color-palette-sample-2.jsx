import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys52r7b9o.css';
import '../../css/q/qynfxmt6y.css';
import '../../css/f/f596bvbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ys52r7b9o"/><path class="qynfxmt6y"/><path class="f596bvbra"/></g>`,
		"fallback": "streamline-freehand-color:color-palette-sample-2",
	});
}

export default Component;
