import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x8oigu9lu.css';
import '../../css/m/mcs1znbxp.css';
import '../../css/x/xtp79fben.css';
import '../../css/e/e5ptpiwim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="x8oigu9lu"/><path class="mcs1znbxp"/><path class="xtp79fben"/><path class="e5ptpiwim"/></g>`,
		"fallback": "icon-park:align-text-left",
	});
}

export default Component;
