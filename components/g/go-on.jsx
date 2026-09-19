import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vsr4mized.css';
import '../../css/i/igldjbc5v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vsr4mized"/><path class="igldjbc5v"/></g>`,
		"fallback": "icon-park:go-on",
	});
}

export default Component;
