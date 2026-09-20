import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyx-z-b5j.css';
import '../../css/r/rd66pungk.css';
import '../../css/o/ob8zxnqwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iyx-z-b5j"/><path clip-rule="evenodd" class="rd66pungk"/><path clip-rule="evenodd" class="ob8zxnqwi"/></g>`,
		"fallback": "streamline-plump-color:drum-stick-flat",
	});
}

export default Component;
