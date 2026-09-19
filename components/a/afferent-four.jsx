import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/axnccqqqw.css';
import '../../css/y/y4xzshe5r.css';
import '../../css/u/unnkb9a0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="axnccqqqw"/><path class="y4xzshe5r"/><path class="unnkb9a0r"/></g>`,
		"fallback": "icon-park:afferent-four",
	});
}

export default Component;
