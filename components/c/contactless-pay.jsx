import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxxtdubsv.css';
import '../../css/v/vj1x4ccli.css';
import '../../css/h/hma64bq8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qxxtdubsv"/><path class="vj1x4ccli"/><path class="hma64bq8s"/></g>`,
		"fallback": "andrsrxn:contactless-pay",
	});
}

export default Component;
