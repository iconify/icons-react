import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g70aadr1q.css';
import '../../css/s/souzsmq4g.css';
import '../../css/a/aaccdmm6g.css';
import '../../css/i/i9_1y7cht.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g70aadr1q"/><path class="souzsmq4g"/><path class="aaccdmm6g"/><path class="i9_1y7cht"/></g>`,
		"fallback": "streamline-color:desktop-chat",
	});
}

export default Component;
