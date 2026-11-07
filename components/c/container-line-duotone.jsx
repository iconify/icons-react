import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jeopszbig.css';
import '../../css/x/xtp4t3bcd.css';
import '../../css/f/f6nuepbyg.css';
import '../../css/p/pnozs4hcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jeopszbig"/><path class="xtp4t3bcd"/><path class="f6nuepbyg"/><path class="pnozs4hcm"/></g>`,
		"fallback": "solar:container-line-duotone",
	});
}

export default Component;
