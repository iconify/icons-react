import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6fyqsbqx.css';
import '../../css/x/xs2r8ub4x.css';
import '../../css/w/wunicfbjz.css';
import '../../css/m/mv6x3rb2e.css';
import '../../css/r/r73xclohw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j6fyqsbqx"/><path class="xs2r8ub4x"/><path class="wunicfbjz"/><path class="mv6x3rb2e"/><path class="r73xclohw"/></g>`,
		"fallback": "streamline-flex-color:browser-bookmark",
	});
}

export default Component;
