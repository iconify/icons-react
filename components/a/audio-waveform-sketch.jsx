import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sk_p_k_hw.css';
import '../../css/e/e6t6s6b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sk_p_k_hw"/><path class="e6t6s6b9x"/></g>`,
		"fallback": "withicons:audio-waveform-sketch",
	});
}

export default Component;
