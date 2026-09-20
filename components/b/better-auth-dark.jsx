import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrfysjbiw.css';
import '../../css/x/xvyoppupm.css';
import '../../css/b/bkp-5qvjz.css';
import '../../css/q/q5nvadb_s.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qrfysjbiw"/><path class="xvyoppupm"/><path class="bkp-5qvjz"/><path class="q5nvadb_s"/></g>`,
		"fallback": "thesvg-color:better-auth-dark",
	});
}

export default Component;
