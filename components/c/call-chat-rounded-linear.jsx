import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b9hwg5m9c.css';
import '../../css/s/sxex49bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b9hwg5m9c"/><path class="sxex49bjk"/></g>`,
		"fallback": "solar:call-chat-rounded-linear",
	});
}

export default Component;
