import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr_39t36c.css';
import '../../css/h/hbfz0nbow.css';
import '../../css/h/h42y6kbni.css';
import '../../css/n/nh_ku8lgf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr_39t36c"/><path class="hbfz0nbow"/><path class="h42y6kbni"/><path class="nh_ku8lgf"/>`,
		"fallback": "energy-icons:battery-recycle-48",
	});
}

export default Component;
