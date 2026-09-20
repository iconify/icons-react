import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/a/ai4x40alt.css';
import '../../css/m/mq7-sbbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="ai4x40alt"/><path class="mq7-sbbud"/></g>`,
		"fallback": "lets-icons:chat-plus",
	});
}

export default Component;
