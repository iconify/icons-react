import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zdixyeh3j.css';
import '../../css/k/kc_f78bvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zdixyeh3j"/><path class="kc_f78bvc"/></g>`,
		"fallback": "streamline-freehand:desktop-action-monitor-screen-sleep-2",
	});
}

export default Component;
