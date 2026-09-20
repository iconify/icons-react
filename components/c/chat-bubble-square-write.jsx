import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/l8kxajbnw.css';
import '../../css/z/zy7qj5ior.css';
import '../../css/d/dqci3t_9u.css';
import '../../css/m/m_9qxcpob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="l8kxajbnw"/><path class="zy7qj5ior"/><path class="dqci3t_9u"/><path class="m_9qxcpob"/></g>`,
		"fallback": "streamline-sharp-color:chat-bubble-square-write",
	});
}

export default Component;
