import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ei8g9bc3n.css';
import '../../css/g/gs9k1ghcu.css';
import '../../css/k/kipcp4bhv.css';
import '../../css/g/g25vtgbhi.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ei8g9bc3n wm-shadow"/><path class="gs9k1ghcu wm-shadow"/><path class="kipcp4bhv"/><path class="g25vtgbhi"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:bell-off",
	});
}

export default Component;
