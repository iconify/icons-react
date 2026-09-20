import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqq78c6qx.css';
import '../../css/o/o4qfr-byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cqq78c6qx"/><path class="o4qfr-byp"/></g>`,
		"fallback": "lets-icons:desk-duotone",
	});
}

export default Component;
