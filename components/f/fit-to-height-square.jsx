import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsw2k6ibb.css';
import '../../css/x/x8--0_bxd.css';
import '../../css/b/bsvy_tbtm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wsw2k6ibb"/><path class="x8--0_bxd"/><path class="bsvy_tbtm"/></g>`,
		"fallback": "streamline-color:fit-to-height-square",
	});
}

export default Component;
