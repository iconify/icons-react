import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xw_vi2g7o.css';
import '../../css/n/npauvw-9g.css';
import '../../css/c/c16hh-b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-a xw_vi2g7o"/><path class="npauvw-9g wm-k"/><path class="c16hh-b9v wm-a"/></g>`,
		"fallback": "withicons:chart-bar-horizontal-sketch",
	});
}

export default Component;
