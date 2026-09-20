import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/s4438qbdx.css';
import '../../css/u/u3casp19i.css';
import '../../css/v/vjlivacpi.css';
import '../../css/b/bbx1ccbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="s4438qbdx"/><path class="u3casp19i"/><path class="vjlivacpi"/><path class="bbx1ccbsz"/></g>`,
		"fallback": "streamline-sharp-color:cashier-machine-2",
	});
}

export default Component;
