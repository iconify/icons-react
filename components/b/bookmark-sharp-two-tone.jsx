import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qd-pmp7al.css';
import '../../css/r/rl_3hqbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qd-pmp7al"/><path class="rl_3hqbmk"/></g>`,
		"fallback": "keyline-icons:bookmark-sharp-two-tone",
	});
}

export default Component;
