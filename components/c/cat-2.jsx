import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uge0tlbfy.css';
import '../../css/s/s__i0-oeh.css';
import '../../css/t/tnwgu_b4w.css';
import '../../css/t/t-a3xkbux.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uge0tlbfy"/><path class="s__i0-oeh"/><path class="tnwgu_b4w"/><path class="t-a3xkbux"/></g>`,
		"fallback": "streamline-flex-color:cat-2",
	});
}

export default Component;
