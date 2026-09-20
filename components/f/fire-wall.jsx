import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/zoorezb6s.css';
import '../../css/b/bnwz5hb0n.css';
import '../../css/e/ekw553btw.css';
import '../../css/l/lxtu9994q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="zoorezb6s"/><path class="bnwz5hb0n"/><path class="ekw553btw"/><path class="lxtu9994q"/></g>`,
		"fallback": "streamline-sharp-color:fire-wall",
	});
}

export default Component;
