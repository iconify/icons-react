import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ee60chbki.css';
import '../../css/b/b3yv8vu-n.css';
import '../../css/p/ppte9cccs.css';
import '../../css/x/xzc8q_bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ee60chbki wm-k"/><path class="b3yv8vu-n wm-k"/><path class="ppte9cccs wm-a"/><path class="wm-s xzc8q_bil"/></g>`,
		"fallback": "withicons:camera-off-sketch",
	});
}

export default Component;
