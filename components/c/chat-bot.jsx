import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qz4qdib_b.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/v/vo1c2hb_n.css';
import '../../css/v/vyei62k9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qz4qdib_b"/><path class="r4f-rbb3p"/><path class="vo1c2hb_n"/><path class="vyei62k9q"/></g>`,
		"fallback": "hugeicons:chat-bot",
	});
}

export default Component;
