import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhduiybjw.css';
import '../../css/f/fezn0l-if.css';
import '../../css/m/mq2euibef.css';
import '../../css/d/dfj84cc1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhduiybjw"/><path class="fezn0l-if"/><circle class="mq2euibef"/><path class="dfj84cc1p"/></g>`,
		"fallback": "andrsrxn:box-settings",
	});
}

export default Component;
