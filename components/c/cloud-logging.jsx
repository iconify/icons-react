import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjow93aqa.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/u/u4aiujbly.css';
import '../../css/c/cjvz156we.css';
import '../../css/i/iicfjbcrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjow93aqa"/><path class="i7sr6ubzr"/><path class="u4aiujbly"/><path class="cjvz156we"/><path class="iicfjbcrf"/>`,
		"fallback": "gcp:cloud-logging",
	});
}

export default Component;
