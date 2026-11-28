import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr9fe-bgg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x8si0cb1k.css';
import '../../css/x/x8k2v8omx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr9fe-bgg secondary"/><g class="dt0cm9dhy primary"><path class="x8si0cb1k"/><path class="x8k2v8omx"/></g>`,
		"fallback": "iconaut:ai-cloud-duo",
	});
}

export default Component;
