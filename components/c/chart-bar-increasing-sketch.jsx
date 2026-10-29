import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cur66cgez.css';
import '../../css/j/jlz57qpcn.css';
import '../../css/s/spe3eibot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cur66cgez wm-a"/><path class="jlz57qpcn wm-k"/><path class="spe3eibot wm-a"/></g>`,
		"fallback": "withicons:chart-bar-increasing-sketch",
	});
}

export default Component;
