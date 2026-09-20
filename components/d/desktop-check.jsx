import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p8y04bble.css';
import '../../css/r/r6wv0301c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p8y04bble"/><path class="r6wv0301c"/></g>`,
		"fallback": "streamline:desktop-check",
	});
}

export default Component;
