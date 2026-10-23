import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1rc_1bfm.css';
import '../../css/g/gy4bdabyq.css';
import '../../css/u/ulwbbn_2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f1rc_1bfm"/><path class="gy4bdabyq"/><path class="ulwbbn_2k"/></g>`,
		"fallback": "lucide-extended:circle-fading-play-duotone",
	});
}

export default Component;
