import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf96sx5bv.css';
import '../../css/j/jsd82fbzk.css';
import '../../css/i/i3boj3tqo.css';
import '../../css/g/gbjaqol1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf96sx5bv"/><path class="jsd82fbzk"/><path class="i3boj3tqo"/><path class="gbjaqol1l"/>`,
		"fallback": "energy-icons:frost-48-bold",
	});
}

export default Component;
