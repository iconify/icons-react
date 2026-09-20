import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wgahfp6lw.css';
import '../../css/j/jnbwgabzh.css';
import '../../css/x/xyd6asbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wgahfp6lw"/><path clip-rule="evenodd" class="jnbwgabzh"/><path class="xyd6asbiq"/></g>`,
		"fallback": "reicon:chat-square-duotone",
	});
}

export default Component;
