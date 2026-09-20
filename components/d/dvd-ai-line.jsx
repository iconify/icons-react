import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw2k2kb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw2k2kb-j"/>`,
		"fallback": "ri:dvd-ai-line",
	});
}

export default Component;
