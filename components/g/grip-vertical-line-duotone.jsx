import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rhe-p1bon.css';
import '../../css/l/l9hq7bbcu.css';
import '../../css/o/out3f_12j.css';
import '../../css/o/ov9m4obnk.css';
import '../../css/w/wgm5sqdww.css';
import '../../css/l/lqrlnfbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle transform="rotate(90 15.512 19)" class="rhe-p1bon"/><circle transform="rotate(90 15.512 12)" class="l9hq7bbcu"/><circle transform="rotate(90 15.496 5)" class="out3f_12j"/><circle transform="rotate(90 8.504 19)" class="ov9m4obnk"/><circle transform="rotate(90 8.504 12)" class="wgm5sqdww"/><circle transform="rotate(90 8.488 5)" class="lqrlnfbtg"/></g>`,
		"fallback": "solar:grip-vertical-line-duotone",
	});
}

export default Component;
