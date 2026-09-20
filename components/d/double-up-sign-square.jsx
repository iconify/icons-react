import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/k29itpbed.css';
import '../../css/y/y-9lx9b9w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="k29itpbed"/><path class="y-9lx9b9w"/></g>`,
		"fallback": "marketeq:double-up-sign-square",
	});
}

export default Component;
