import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v3v0ln4og.css';
import '../../css/h/h84xghb3s.css';
import '../../css/u/u5e3l5bit.css';
import '../../css/n/nzolxssuq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="v3v0ln4og"/><path class="h84xghb3s"/><path class="u5e3l5bit"/><path class="nzolxssuq"/></g>`,
		"fallback": "icon-park:cube-two",
	});
}

export default Component;
