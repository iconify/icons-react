import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8a6n4b0g.css';
import '../../css/p/p3n6dthnz.css';
import '../../css/x/xgltndl2p.css';
import '../../css/u/u07p8gbso.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8a6n4b0g"/><path class="p3n6dthnz"/><path class="xgltndl2p"/><path class="u07p8gbso"/></g>`,
		"fallback": "streamline-kameleon-color:donut-duo",
	});
}

export default Component;
