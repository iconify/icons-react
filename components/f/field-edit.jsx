import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7d6_i95l.css';
import '../../css/c/ca4m0qbws.css';
import '../../css/f/fkx8f7oxo.css';
import '../../css/e/ep14tjbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(135 8.023 8.027)scale(-1 1)" class="v7d6_i95l"/><path class="ca4m0qbws"/><path clip-rule="evenodd" class="fkx8f7oxo"/><path class="ep14tjbdb"/></g>`,
		"fallback": "andrsrxn:field-edit",
	});
}

export default Component;
