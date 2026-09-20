import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwh__obbd.css';
import '../../css/o/o6pe5-b3x.css';
import '../../css/c/cfbv642gs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwh__obbd"/><path class="o6pe5-b3x"/><path class="cfbv642gs"/></g>`,
		"fallback": "streamline-flex-color:bag-suitcase-4",
	});
}

export default Component;
