import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f-yvlbbar.css';
import '../../css/y/ykoe54boh.css';
import '../../css/e/ef6ao3b0m.css';
import '../../css/i/is6r9tbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f-yvlbbar wm-k"/><path class="wm-a ykoe54boh"/><path class="ef6ao3b0m wm-k"/><path class="is6r9tbwq wm-a"/></g>`,
		"fallback": "withicons:chart-spline-sketch",
	});
}

export default Component;
