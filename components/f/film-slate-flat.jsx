import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0o4_5bdu.css';
import '../../css/k/k2u2jj93x.css';
import '../../css/k/k6xi7m4tz.css';
import '../../css/v/vw722cqhz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0o4_5bdu"/><path class="k2u2jj93x"/><path class="k6xi7m4tz"/><path class="vw722cqhz"/></g>`,
		"fallback": "streamline-plump-color:film-slate-flat",
	});
}

export default Component;
