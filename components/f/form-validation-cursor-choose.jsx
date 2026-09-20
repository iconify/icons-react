import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk4wf3-jg.css';
import '../../css/f/f7vr3ib9g.css';
import '../../css/q/q2umnybct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qk4wf3-jg"/><path class="f7vr3ib9g"/><path class="q2umnybct"/></g>`,
		"fallback": "streamline-freehand-color:form-validation-cursor-choose",
	});
}

export default Component;
