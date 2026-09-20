import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fzi2z5bvg.css';
import '../../css/w/wjg5129at.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="fzi2z5bvg"/><path class="wjg5129at"/></g>`,
		"fallback": "marketeq:blueprint-architecture",
	});
}

export default Component;
