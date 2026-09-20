import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_6rye_uw.css';
import '../../css/z/zec7e05fl.css';
import '../../css/j/j2qaexbnz.css';
import '../../css/s/ss0y4ibnw.css';
import '../../css/g/gy1t3tbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r_6rye_uw"/><path class="zec7e05fl"/><path class="j2qaexbnz"/><path class="ss0y4ibnw"/><path class="gy1t3tbra"/></g>`,
		"fallback": "streamline-ultimate-color:calendar-date",
	});
}

export default Component;
