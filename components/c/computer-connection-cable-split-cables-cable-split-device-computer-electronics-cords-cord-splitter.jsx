import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ui8-h5jfi.css';
import '../../css/f/fwjblvbkq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ui8-h5jfi"/><path class="fwjblvbkq"/></g>`,
		"fallback": "streamline:computer-connection-cable-split-cables-cable-split-device-computer-electronics-cords-cord-splitter",
	});
}

export default Component;
