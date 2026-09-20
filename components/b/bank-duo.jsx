import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dukzfrx0n.css';
import '../../css/p/p32ilb6_l.css';
import '../../css/a/anjjidc8s.css';
import '../../css/f/f4i00ubtm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dukzfrx0n"/><path class="p32ilb6_l"/><path class="anjjidc8s"/><path class="f4i00ubtm"/></g>`,
		"fallback": "streamline-kameleon-color:bank-duo",
	});
}

export default Component;
