import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm-oxkq7l.css';
import '../../css/k/k45nei59j.css';
import '../../css/x/x1swjoy7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pm-oxkq7l"/><path class="k45nei59j"/><path class="x1swjoy7s"/></g>`,
		"fallback": "icon-park-outline:headphone-sound",
	});
}

export default Component;
