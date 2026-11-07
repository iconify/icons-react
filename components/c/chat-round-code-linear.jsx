import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/snto2-zvc.css';
import '../../css/g/gu3kiwldn.css';
import '../../css/r/r6t4zeiqh.css';
import '../../css/p/p5k2ipb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="snto2-zvc"/><path class="gu3kiwldn"/><path class="r6t4zeiqh"/><path class="p5k2ipb-f"/></g>`,
		"fallback": "solar:chat-round-code-linear",
	});
}

export default Component;
