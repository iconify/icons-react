import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hbz15abgu.css';
import '../../css/h/hobwr1b0j.css';
import '../../css/h/h0cjjvbnh.css';
import '../../css/h/hfny-hbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hbz15abgu"/><path class="hobwr1b0j wm-a"/><path class="h0cjjvbnh wm-k"/><path class="hfny-hbfu wm-a"/></g>`,
		"fallback": "withicons:binoculars-sketch",
	});
}

export default Component;
