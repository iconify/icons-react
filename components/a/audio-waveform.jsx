import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wndgu8_xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wndgu8_xq"/>`,
		"fallback": "withicons-bauhaus:audio-waveform",
	});
}

export default Component;
