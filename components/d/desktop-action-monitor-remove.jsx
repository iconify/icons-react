import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s6p5_tbgk.css';
import '../../css/v/v-yckhu5b.css';
import '../../css/t/t98ocibjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s6p5_tbgk"/><path class="v-yckhu5b"/><path class="t98ocibjl"/></g>`,
		"fallback": "streamline-freehand:desktop-action-monitor-remove",
	});
}

export default Component;
