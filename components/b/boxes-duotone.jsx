import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yro18xbpx.css';
import '../../css/h/h2a1v9bpu.css';
import '../../css/g/g8svzngkh.css';
import '../../css/y/yv9o5wbnf.css';
import '../../css/q/qav3a8c9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yro18xbpx"/><path class="h2a1v9bpu"/><path class="g8svzngkh"/><path class="yv9o5wbnf"/><path class="qav3a8c9g"/></g>`,
		"fallback": "lucide-extended:boxes-duotone",
	});
}

export default Component;
