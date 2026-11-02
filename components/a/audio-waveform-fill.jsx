import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr7f2mopu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr7f2mopu"/>`,
		"fallback": "mingcute:audio-waveform-fill",
	});
}

export default Component;
