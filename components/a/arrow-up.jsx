import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/cqyq4mlhs.css';
import '../../css/r/rhi7qpbko.css';
import '../../css/r/rj_u9lbil.css';
import '../../css/s/sph30q-dz.css';
import '../../css/d/dx7iutb6u.css';
import '../../css/s/sh-bfimtx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="cqyq4mlhs"/><path class="rhi7qpbko"/><path class="rj_u9lbil"/></g><path class="sph30q-dz"/><path class="dx7iutb6u"/><path class="sh-bfimtx"/></g>`,
		"fallback": "pepicons-print:arrow-up",
	});
}

export default Component;
