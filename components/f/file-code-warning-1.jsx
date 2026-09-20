import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0_eb-w-b.css';
import '../../css/m/mwysubbyf.css';
import '../../css/n/nogm3vbta.css';
import '../../css/q/q2hipcc0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q0_eb-w-b"/><path class="mwysubbyf"/><path class="nogm3vbta"/><path class="q2hipcc0w"/></g>`,
		"fallback": "streamline-freehand:file-code-warning-1",
	});
}

export default Component;
