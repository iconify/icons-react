import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/to-bzow0z.css';
import '../../css/b/bwt7f1bmt.css';
import '../../css/d/dp2cw1ouh.css';
import '../../css/p/pncw32s0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="to-bzow0z"/><path class="bwt7f1bmt wm-k"/><path class="dp2cw1ouh wm-k"/><path class="pncw32s0k wm-a"/></g>`,
		"fallback": "withicons:ghost-sketch",
	});
}

export default Component;
