import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kb-tg7b0i.css';
import '../../css/i/i3pv7acav.css';
import '../../css/a/a6yd-gboc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="kb-tg7b0i"/><path class="i3pv7acav"/><path class="a6yd-gboc"/></g>`,
		"fallback": "icon-park:history",
	});
}

export default Component;
