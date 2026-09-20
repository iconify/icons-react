import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x4riq3blc.css';
import '../../css/y/yj_5ymbss.css';
import '../../css/b/b_yy_rbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x4riq3blc"/><path class="yj_5ymbss"/><path class="b_yy_rbmc"/></g>`,
		"fallback": "streamline-freehand:crypto-close-up-group-chat-users-conversation",
	});
}

export default Component;
