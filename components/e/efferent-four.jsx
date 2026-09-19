import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ecbjzsdzj.css';
import '../../css/p/pjxioib2x.css';
import '../../css/u/unnkb9a0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ecbjzsdzj"/><path class="pjxioib2x"/><path class="unnkb9a0r"/></g>`,
		"fallback": "icon-park:efferent-four",
	});
}

export default Component;
