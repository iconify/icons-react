import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qsw3yebfy.css';
import '../../css/c/cc7rpwbsq.css';
import '../../css/x/xfnzpgbvh.css';
import '../../css/p/pandr5r4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qsw3yebfy"/><path class="cc7rpwbsq wm-shadow"/><path class="xfnzpgbvh"/><path class="pandr5r4z"/></g>`,
		"fallback": "withicons:bamboo-engrave",
	});
}

export default Component;
