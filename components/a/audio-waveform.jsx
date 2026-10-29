import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qyqg0sbfa.css';
import '../../css/h/h11vkrbik.css';
import '../../css/x/xu_q_sbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qyqg0sbfa wm-k"/><path class="h11vkrbik wm-k"/><path class="wm-k xu_q_sbdz"/></g>`,
		"fallback": "withicons-anime:audio-waveform",
	});
}

export default Component;
