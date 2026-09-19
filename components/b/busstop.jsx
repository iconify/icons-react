import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ficd_6bue.css';
import '../../css/o/oqza4fg4m.css';
import '../../css/m/mt_s06c5k.css';
import '../../css/m/m7jr4ydoi.css';
import '../../css/f/fe8myiixm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ficd_6bue"/><path class="oqza4fg4m"/><circle class="mt_s06c5k"/><path class="m7jr4ydoi"/><path class="fe8myiixm"/>`,
		"fallback": "fxemoji:busstop",
	});
}

export default Component;
