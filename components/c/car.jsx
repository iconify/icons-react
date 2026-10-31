import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x6rv0xb3c.css';
import '../../css/l/leqow3bez.css';
import '../../css/v/v_v3yjbcm.css';
import '../../css/g/gb_fuu_vh.css';
import '../../css/x/x3ln7_bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow x6rv0xb3c"/><path class="leqow3bez"/><path class="v_v3yjbcm"/><path class="gb_fuu_vh"/><path class="x3ln7_bqv"/></g>`,
		"fallback": "withicons-retro:car",
	});
}

export default Component;
