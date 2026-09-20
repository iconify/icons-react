import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx9sfhb0h.css';
import '../../css/u/u3tke38bu.css';
import '../../css/y/ybpq_2f7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rx9sfhb0h"/><path class="u3tke38bu"/><path class="ybpq_2f7g"/></g>`,
		"fallback": "tdesign:chart-ring",
	});
}

export default Component;
