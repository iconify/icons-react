import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c1r0hdchf.css';
import '../../css/t/tyyddl8mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="c1r0hdchf"/><path class="tyyddl8mo"/></g>`,
		"fallback": "streamline-cyber:bubble-chat-text-setting",
	});
}

export default Component;
