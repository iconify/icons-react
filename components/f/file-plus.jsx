import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emor5olcs.css';
import '../../css/n/nb2b15byi.css';
import '../../css/q/qad5q_aey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="emor5olcs"/><path class="nb2b15byi"/><path class="qad5q_aey"/></g>`,
		"fallback": "andrsrxn:file-plus",
	});
}

export default Component;
