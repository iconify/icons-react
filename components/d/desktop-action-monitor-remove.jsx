import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lvw-4wf-u.css';
import '../../css/e/eqp1polmy.css';
import '../../css/y/ya_ml8bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lvw-4wf-u"/><path class="eqp1polmy"/><path class="ya_ml8bfp"/></g>`,
		"fallback": "streamline-freehand-color:desktop-action-monitor-remove",
	});
}

export default Component;
