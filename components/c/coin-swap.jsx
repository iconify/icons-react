import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hec4_bb-a.css';
import '../../css/d/d-2w6k7xp.css';
import '../../css/c/ct-sjcc7t.css';
import '../../css/o/ok9hogs-n.css';
import '../../css/o/ovaqii3zz.css';
import '../../css/u/uwy6n1bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hec4_bb-a"/><path class="d-2w6k7xp"/><path class="ct-sjcc7t"/><ellipse class="ok9hogs-n"/><ellipse class="ovaqii3zz"/><path class="uwy6n1bqk"/></g>`,
		"fallback": "andrsrxn:coin-swap",
	});
}

export default Component;
