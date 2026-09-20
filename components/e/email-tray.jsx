import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tunre70_k.css';
import '../../css/f/f_afl5b6k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tunre70_k"/><path class="f_afl5b6k"/>`,
		"fallback": "streamline-pixel:email-tray",
	});
}

export default Component;
