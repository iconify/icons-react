import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6_b6ac2z.css';
import '../../css/c/c05nj8ohm.css';
import '../../css/o/odr93172r.css';
import '../../css/m/mo6_-1b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6_b6ac2z"/><path class="c05nj8ohm"/><path class="odr93172r"/><path class="mo6_-1b9w"/></g>`,
		"fallback": "streamline-cyber-color:castle-2",
	});
}

export default Component;
