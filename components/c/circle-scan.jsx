import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrt7de4ao.css';
import '../../css/m/mlbyze8aq.css';
import '../../css/s/snznu9z-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lrt7de4ao"/><circle class="mlbyze8aq"/><path clip-rule="evenodd" class="snznu9z-k"/></g>`,
		"fallback": "andrsrxn:circle-scan",
	});
}

export default Component;
