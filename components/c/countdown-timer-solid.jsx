import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipj3-xb_h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ipj3-xb_h"/>`,
		"fallback": "streamline-flex:countdown-timer-solid",
	});
}

export default Component;
