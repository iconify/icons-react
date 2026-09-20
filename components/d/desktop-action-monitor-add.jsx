import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zv1da0btv.css';
import '../../css/p/p4ymsz41h.css';
import '../../css/k/kuyexsk0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zv1da0btv"/><path class="p4ymsz41h"/><path class="kuyexsk0s"/></g>`,
		"fallback": "streamline-freehand-color:desktop-action-monitor-add",
	});
}

export default Component;
