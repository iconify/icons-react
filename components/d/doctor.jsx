import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj9xhdc4k.css';
import '../../css/n/n_9w97sji.css';
import '../../css/b/bjum2bbcp.css';
import '../../css/s/s9txiubvk.css';
import '../../css/g/g78lxacsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lj9xhdc4k"/><path class="n_9w97sji"/><path class="bjum2bbcp"/><path class="s9txiubvk"/><path class="g78lxacsr"/></g>`,
		"fallback": "streamline-cyber-color:doctor",
	});
}

export default Component;
