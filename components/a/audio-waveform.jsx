import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvgvcux-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvgvcux-u"/>`,
		"fallback": "pixelarticons:audio-waveform",
	});
}

export default Component;
