import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4wfvmb9g.css';
import '../../css/k/kqr5xyb8q.css';
import '../../css/e/evopurlem.css';
import '../../css/j/jcxcxcb3t.css';
import '../../css/p/pccofcbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s4wfvmb9g"/><circle class="kqr5xyb8q"/><path class="evopurlem"/><circle class="jcxcxcb3t"/><path class="pccofcbol"/></g>`,
		"fallback": "andrsrxn:camping",
	});
}

export default Component;
