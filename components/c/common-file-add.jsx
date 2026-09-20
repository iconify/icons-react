import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qem0c1mgy.css';
import '../../css/s/sfzdk5buh.css';
import '../../css/e/ec4sscspa.css';
import '../../css/n/no_ar1xgm.css';
import '../../css/s/swljdbpoi.css';
import '../../css/z/zo1om_j7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qem0c1mgy"/><path class="sfzdk5buh"/><path class="ec4sscspa"/><path class="no_ar1xgm"/><path class="swljdbpoi"/><path class="zo1om_j7i"/></g>`,
		"fallback": "streamline-ultimate-color:common-file-add",
	});
}

export default Component;
