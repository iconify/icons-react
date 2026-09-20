import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/ha_bit1vd.css';
import '../../css/u/uygosq-qz.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="ha_bit1vd"/><path class="uygosq-qz"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:database-circle-filled",
	});
}

export default Component;
