import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdtlrzbtv.css';
import '../../css/h/h3iwvne5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sdtlrzbtv secondary"/><path class="h3iwvne5x primary"/></g>`,
		"fallback": "iconaut:chat-bot-duotone",
	});
}

export default Component;
