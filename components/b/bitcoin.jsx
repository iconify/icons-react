import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvekuabrc.css';
import '../../css/r/rc7piybql.css';
import '../../css/v/vsbbm2bdu.css';
import '../../css/b/bqfct8bxm.css';
import '../../css/x/xsd125mfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mvekuabrc"/><path class="rc7piybql"/><path class="vsbbm2bdu"/><path class="bqfct8bxm"/><path class="xsd125mfh"/></g>`,
		"fallback": "icon-park:bitcoin",
	});
}

export default Component;
