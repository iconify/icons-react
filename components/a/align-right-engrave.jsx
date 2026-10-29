import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kcbgbfb1b.css';
import '../../css/o/opnejxbao.css';
import '../../css/t/toalvz3ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kcbgbfb1b"/><path class="opnejxbao wm-shadow"/><path class="toalvz3ue"/></g>`,
		"fallback": "withicons:align-right-engrave",
	});
}

export default Component;
