import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vbz9wgb-h.css';
import '../../css/q/qkf97msjg.css';
import '../../css/x/xz3athmuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vbz9wgb-h"/><path class="qkf97msjg"/><path class="xz3athmuc"/></g>`,
		"fallback": "streamline-freehand:desktop-action-monitor-question",
	});
}

export default Component;
