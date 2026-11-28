import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fphjoobqp.css';
import '../../css/h/hsifrab6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fphjoobqp secondary"/><path class="hsifrab6k primary"/></g>`,
		"fallback": "iconaut:ai-video-duotone",
	});
}

export default Component;
