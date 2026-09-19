import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz7dlcc-l.css';
import '../../css/e/enkicgbla.css';
import '../../css/i/isfszej6d.css';
import '../../css/k/ky3w5_bub.css';
import '../../css/x/xbsl-kcev.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tz7dlcc-l"><path class="enkicgbla"/><path class="isfszej6d"/><path class="ky3w5_bub"/><path class="xbsl-kcev"/></g>`,
		"fallback": "catppuccin:foreman",
	});
}

export default Component;
