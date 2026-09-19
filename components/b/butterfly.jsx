import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m-mnfwbjx.css';
import '../../css/c/czz7zfb8p.css';
import '../../css/v/vmjdawb4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="m-mnfwbjx"/><path class="czz7zfb8p"/><path class="vmjdawb4c"/></g>`,
		"fallback": "icon-park:butterfly",
	});
}

export default Component;
