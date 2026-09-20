import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/w5197-byv.css';
import '../../css/b/bx2rfcc2d.css';
import '../../css/m/mp4vgo5lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="w5197-byv"/><path class="bx2rfcc2d"/><path class="mp4vgo5lb"/></g>`,
		"fallback": "streamline-cyber:business-female-heart",
	});
}

export default Component;
