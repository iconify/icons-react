import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz3s7sbjt.css';
import '../../css/i/i8zr05b0h.css';
import '../../css/b/bn7-8p0jr.css';
import '../../css/b/bq0mkp6qi.css';
import '../../css/x/x8bpfnz5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iz3s7sbjt"/><path class="i8zr05b0h"/><path class="bn7-8p0jr"/><path class="bq0mkp6qi"/><path class="x8bpfnz5y"/></g>`,
		"fallback": "andrsrxn:game-controller-screen",
	});
}

export default Component;
