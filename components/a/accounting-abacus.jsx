import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xas18pb7n.css';
import '../../css/o/o_jac7o0o.css';
import '../../css/k/k5lm9_b8y.css';
import '../../css/z/zwcc34jgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xas18pb7n"/><path class="o_jac7o0o"/><path class="k5lm9_b8y"/><path class="zwcc34jgz"/></g>`,
		"fallback": "streamline-freehand-color:accounting-abacus",
	});
}

export default Component;
