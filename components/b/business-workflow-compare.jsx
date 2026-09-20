import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkr7y1bpb.css';
import '../../css/h/hqqn9kj7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkr7y1bpb"/><path class="hqqn9kj7m"/></g>`,
		"fallback": "streamline-freehand-color:business-workflow-compare",
	});
}

export default Component;
