import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wrb5chb2g.css';
import '../../css/w/wbdap1rkv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wrb5chb2g"/><path class="wbdap1rkv"/></g>`,
		"fallback": "icon-park:arrow-left",
	});
}

export default Component;
