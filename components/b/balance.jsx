import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/d/dj7oebbfk.css';
import '../../css/r/rg511obvo.css';
import '../../css/t/t0v4pnbgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="dj7oebbfk"/><path class="rg511obvo"/><path class="t0v4pnbgw"/></g>`,
		"fallback": "icon-park-outline:balance",
	});
}

export default Component;
