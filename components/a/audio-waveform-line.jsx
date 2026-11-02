import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxai5t9tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxai5t9tm"/>`,
		"fallback": "mingcute:audio-waveform-line",
	});
}

export default Component;
