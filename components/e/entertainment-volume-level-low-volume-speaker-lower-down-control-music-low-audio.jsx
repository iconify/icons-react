import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhm60xclg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhm60xclg"/>`,
		"fallback": "streamline:entertainment-volume-level-low-volume-speaker-lower-down-control-music-low-audio",
	});
}

export default Component;
