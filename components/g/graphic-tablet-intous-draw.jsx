import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xopt6g09k.css';
import '../../css/m/m4mtarblb.css';
import '../../css/e/e36jr6zuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xopt6g09k"/><path class="m4mtarblb"/><path class="e36jr6zuj"/></g>`,
		"fallback": "streamline-freehand-color:graphic-tablet-intous-draw",
	});
}

export default Component;
