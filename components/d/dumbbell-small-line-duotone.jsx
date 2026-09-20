import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s46x_lt4e.css';
import '../../css/t/t507ytbah.css';
import '../../css/d/dnt50fg1x.css';
import '../../css/q/qevzqzytg.css';
import '../../css/b/byr08eb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s46x_lt4e"/><path class="t507ytbah"/><path class="dnt50fg1x"/><path class="qevzqzytg"/><path class="byr08eb8o"/></g>`,
		"fallback": "solar:dumbbell-small-line-duotone",
	});
}

export default Component;
