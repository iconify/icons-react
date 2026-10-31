import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ybs6u5kmp.css';
import '../../css/p/pkd9u_bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ybs6u5kmp"/><path class="pkd9u_bqz"/></g>`,
		"fallback": "coolicons:clipboard-duotone-round",
	});
}

export default Component;
