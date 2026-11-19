import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tcccezkkp.css';
import '../../css/r/rqby53ygo.css';
import '../../css/a/apqmqp68f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tcccezkkp"/><path class="rqby53ygo"/><path class="apqmqp68f"/></g>`,
		"fallback": "andrsrxn:code-sparkle",
	});
}

export default Component;
