import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9s6hlb1c.css';
import '../../css/p/p8r6vku4o.css';
import '../../css/b/bvyi81cxr.css';
import '../../css/m/mpmo64bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9s6hlb1c"/><path class="p8r6vku4o"/><path class="bvyi81cxr"/><path class="mpmo64bka"/></g>`,
		"fallback": "streamline-cyber-color:blood-drop",
	});
}

export default Component;
