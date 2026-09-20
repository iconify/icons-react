import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gyqyoac1s.css';
import '../../css/f/favbhbcbg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gyqyoac1s"/><path class="favbhbcbg"/></g>`,
		"fallback": "streamline-flex:countdown-timer",
	});
}

export default Component;
