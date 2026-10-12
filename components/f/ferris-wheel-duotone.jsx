import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzmariesu.css';
import '../../css/n/nbqssjb9c.css';
import '../../css/b/bbpijxb0t.css';
import '../../css/s/smguzlbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nzmariesu"/><path class="nbqssjb9c"/><path class="bbpijxb0t"/><path class="smguzlbht"/></g>`,
		"fallback": "lucide-extended:ferris-wheel-duotone",
	});
}

export default Component;
