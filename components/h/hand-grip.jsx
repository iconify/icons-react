import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gvx73yb2f.css';
import '../../css/j/jrp9cab6c.css';
import '../../css/c/cbxuw3bxz.css';
import '../../css/q/q5sl9ebqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gvx73yb2f"/><path class="jrp9cab6c"/><path class="cbxuw3bxz"/><path class="q5sl9ebqd"/></g>`,
		"fallback": "hugeicons:hand-grip",
	});
}

export default Component;
