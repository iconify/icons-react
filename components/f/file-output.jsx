import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r9px29bcq.css';
import '../../css/l/lou_evkxu.css';
import '../../css/u/ucnad0gku.css';
import '../../css/m/mkl7_9b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="r9px29bcq wm-shadow"/><path class="lou_evkxu wm-shadow"/><path class="ucnad0gku"/><path class="mkl7_9b_o"/></g>`,
		"fallback": "withicons-brutal:file-output",
	});
}

export default Component;
