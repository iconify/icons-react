import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl8l72fir.css';
import '../../css/k/km0r8kbga.css';
import '../../css/w/wowqf1boy.css';
import '../../css/m/myqz-bbdt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl8l72fir"/><path class="km0r8kbga"/><path class="wowqf1boy"/><path class="myqz-bbdt"/>`,
		"fallback": "fxemoji:blackmissingsmiley",
	});
}

export default Component;
