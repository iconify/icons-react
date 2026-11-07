import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v9if1obeg.css';
import '../../css/i/ir6vhdc8p.css';
import '../../css/c/c88w_27gk.css';
import '../../css/g/gevgpe-0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v9if1obeg"/><path class="ir6vhdc8p"/><path class="c88w_27gk"/><path class="gevgpe-0m"/></g>`,
		"fallback": "solar:cup-paper-line-duotone",
	});
}

export default Component;
