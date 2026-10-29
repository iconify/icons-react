import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wfwb433hg.css';
import '../../css/y/yrv74sbtp.css';
import '../../css/j/jsqpoxyat.css';
import '../../css/t/tzhu-rhme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wfwb433hg wm-k"/><path class="wm-a yrv74sbtp"/><path class="jsqpoxyat wm-k"/><path class="tzhu-rhme wm-a"/></g>`,
		"fallback": "withicons:beer-sketch",
	});
}

export default Component;
