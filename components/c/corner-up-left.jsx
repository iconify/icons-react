import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/u99ntq5yv.css';
import '../../css/t/tte4pl5tz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="u99ntq5yv"/><path class="tte4pl5tz"/></g>`,
		"fallback": "icon-park:corner-up-left",
	});
}

export default Component;
