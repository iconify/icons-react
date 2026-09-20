import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9s103bcs.css';
import '../../css/n/n3xy1-b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9s103bcs"/><path class="n3xy1-b1l"/>`,
		"fallback": "streamline-freehand:business-workflow-merge-1",
	});
}

export default Component;
