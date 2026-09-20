import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r6ez41b0w.css';
import '../../css/v/vm8xudbsl.css';
import '../../css/q/qyf-xkhld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r6ez41b0w"/><path class="vm8xudbsl"/><path class="qyf-xkhld"/></g>`,
		"fallback": "streamline-freehand-color:analytics-graph-bar-horizontal",
	});
}

export default Component;
