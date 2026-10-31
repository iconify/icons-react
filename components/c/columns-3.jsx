import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5ke_q-oc.css';
import '../../css/u/ufhyd-bxp.css';
import '../../css/c/cvpr-5bot.css';
import '../../css/v/vrb8f8bma.css';
import '../../css/r/r69eqjbgn.css';
import '../../css/v/v76vaobjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a5ke_q-oc wm-shadow"/><path class="ufhyd-bxp wm-shadow"/><path class="cvpr-5bot"/><path class="vrb8f8bma"/><path class="r69eqjbgn"/><path class="v76vaobjz"/></g>`,
		"fallback": "withicons-brutal:columns-3",
	});
}

export default Component;
