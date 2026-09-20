import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wgl8w-dbv.css';
import '../../css/w/wqpg91bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wgl8w-dbv"/><path class="wqpg91bpg"/></g>`,
		"fallback": "keyline-icons:ear-waveform-two-tone",
	});
}

export default Component;
