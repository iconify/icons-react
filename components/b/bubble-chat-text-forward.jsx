import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1pc_s_be.css';
import '../../css/v/v3mx8eb-y.css';
import '../../css/j/jgcfcbbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z1pc_s_be"/><path class="v3mx8eb-y"/><path class="jgcfcbbxj"/></g>`,
		"fallback": "streamline-cyber-color:bubble-chat-text-forward",
	});
}

export default Component;
