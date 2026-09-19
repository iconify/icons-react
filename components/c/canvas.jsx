import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gmk1bhgwk.css';
import '../../css/g/gum7tibxa.css';
import '../../css/r/rmlatf6un.css';
import '../../css/i/i0ecgc6dl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gmk1bhgwk"/><path class="gum7tibxa"/><path class="rmlatf6un"/><path class="i0ecgc6dl"/></g>`,
		"fallback": "hugeicons:canvas",
	});
}

export default Component;
