import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/atbsuackl.css';
import '../../css/b/byrkcdbve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="atbsuackl"/><path class="byrkcdbve"/></g>`,
		"fallback": "icon-park:aquarius",
	});
}

export default Component;
