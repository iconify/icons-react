import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xl6o4of4b.css';
import '../../css/z/zf6iq2bjl.css';
import '../../css/q/q4kgps97f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xl6o4of4b"/><path class="zf6iq2bjl"/><path class="q4kgps97f"/></g>`,
		"fallback": "andrsrxn:fish",
	});
}

export default Component;
