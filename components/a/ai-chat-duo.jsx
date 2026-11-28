import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fer9jq_fe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jp1x-kbod.css';
import '../../css/l/lwuu7pbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fer9jq_fe secondary"/><g class="dt0cm9dhy primary"><path class="jp1x-kbod"/><path class="lwuu7pbfz"/></g>`,
		"fallback": "iconaut:ai-chat-duo",
	});
}

export default Component;
