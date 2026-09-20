import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lox516bku.css';
import '../../css/n/nnljg81wr.css';
import '../../css/i/i0-abgbpl.css';
import '../../css/g/g4u11hbak.css';
import '../../css/s/stzq21bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lox516bku"/><path class="nnljg81wr"/><path class="i0-abgbpl"/><path class="g4u11hbak"/><path class="stzq21bgc"/></g>`,
		"fallback": "streamline-cyber-color:bubble-chat-text-setting",
	});
}

export default Component;
