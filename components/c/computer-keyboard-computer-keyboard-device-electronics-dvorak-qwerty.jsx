import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j1rkg14-g.css';
import '../../css/x/x-pf499vq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="j1rkg14-g"/><path class="x-pf499vq"/></g>`,
		"fallback": "streamline:computer-keyboard-computer-keyboard-device-electronics-dvorak-qwerty",
	});
}

export default Component;
