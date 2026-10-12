import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jctuc0bqv.css';
import '../../css/p/pv55lpbwj.css';
import '../../css/e/e3xvblb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="jctuc0bqv"/><path class="pv55lpbwj"/><path class="e3xvblb0r"/></g>`,
		"fallback": "andrsrxn:cashback",
	});
}

export default Component;
