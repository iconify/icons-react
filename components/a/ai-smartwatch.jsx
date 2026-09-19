import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/am_u226-o.css';
import '../../css/x/xn8jdabvx.css';
import '../../css/l/lpx543bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="am_u226-o"/><path class="xn8jdabvx"/><path class="lpx543bxg"/></g>`,
		"fallback": "hugeicons:ai-smartwatch",
	});
}

export default Component;
