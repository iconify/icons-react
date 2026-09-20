import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/f/ftb7s8b8n.css';
import '../../css/m/mn8m4ob4b.css';
import '../../css/b/bzd7kbc5v.css';
import '../../css/n/n8gxhrbom.css';
import '../../css/w/wwu6_xbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="ftb7s8b8n"/><path class="mn8m4ob4b"/><path class="bzd7kbc5v"/><path class="n8gxhrbom"/><path class="wwu6_xbar"/></g>`,
		"fallback": "streamline-ultimate:air-conditioner-rear-1",
	});
}

export default Component;
