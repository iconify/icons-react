import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dyeav1b1n.css';
import '../../css/x/x8oigu9lu.css';
import '../../css/x/xtp79fben.css';
import '../../css/w/wpmhq029i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dyeav1b1n"/><path class="x8oigu9lu"/><path class="xtp79fben"/><path class="wpmhq029i"/></g>`,
		"fallback": "icon-park:align-text-both",
	});
}

export default Component;
