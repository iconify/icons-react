import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sayb-0bmx.css';
import '../../css/i/ircx_pb5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sayb-0bmx"/><path class="ircx_pb5h"/>`,
		"fallback": "carbon:airplay-filled",
	});
}

export default Component;
