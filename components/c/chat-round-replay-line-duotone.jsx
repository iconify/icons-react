import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/snto2-zvc.css';
import '../../css/b/b0ffosd5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="snto2-zvc"/><path class="b0ffosd5g"/></g>`,
		"fallback": "solar:chat-round-replay-line-duotone",
	});
}

export default Component;
