import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pdrooycdc.css';
import '../../css/j/j3rjalw-t.css';
import '../../css/i/iku5y4bmg.css';
import '../../css/m/m0_bcniww.css';
import '../../css/l/lcixq76zh.css';
import '../../css/o/o40gyoiqb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="pdrooycdc"/><path class="j3rjalw-t"/><path class="iku5y4bmg"/><path class="m0_bcniww"/><path class="lcixq76zh"/><circle class="o40gyoiqb"/></g>`,
		"fallback": "icon-park:assembly-line",
	});
}

export default Component;
