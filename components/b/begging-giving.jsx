import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kzem0p7_u.css';
import '../../css/t/t0pymt0bq.css';
import '../../css/i/ikmve7dyu.css';
import '../../css/m/mxyg-1bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kzem0p7_u"/><path class="t0pymt0bq"/><path class="ikmve7dyu"/><path class="mxyg-1bkp"/></g>`,
		"fallback": "streamline-freehand-color:begging-giving",
	});
}

export default Component;
