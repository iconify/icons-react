import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f95p1mb3x.css';
import '../../css/x/x8oigu9lu.css';
import '../../css/x/xtp79fben.css';
import '../../css/w/wppt9bc-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="f95p1mb3x"/><path class="x8oigu9lu"/><path class="xtp79fben"/><path class="wppt9bc-v"/></g>`,
		"fallback": "icon-park:align-text-center",
	});
}

export default Component;
