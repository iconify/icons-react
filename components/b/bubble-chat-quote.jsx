import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgts9bcxv.css';
import '../../css/e/eatt2w9xb.css';
import '../../css/l/lyzbmhl9s.css';
import '../../css/i/iyl7zkbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgts9bcxv"/><path class="eatt2w9xb"/><path class="lyzbmhl9s"/><path class="iyl7zkbmr"/></g>`,
		"fallback": "streamline-cyber-color:bubble-chat-quote",
	});
}

export default Component;
