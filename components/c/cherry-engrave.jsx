import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xihraibpt.css';
import '../../css/o/opiqdzbqt.css';
import '../../css/e/e4lfdh1cv.css';
import '../../css/v/vrm34f8gd.css';
import '../../css/o/ows2wwb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xihraibpt"/><path class="opiqdzbqt wm-a"/><path class="e4lfdh1cv wm-shadow"/><path class="vrm34f8gd wm-k"/><path class="ows2wwb4n wm-a"/></g>`,
		"fallback": "withicons:cherry-engrave",
	});
}

export default Component;
