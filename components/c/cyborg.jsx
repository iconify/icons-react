import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o5nr4pble.css';
import '../../css/p/per69-btm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o5nr4pble"/><path class="per69-btm"/></g>`,
		"fallback": "streamline:cyborg",
	});
}

export default Component;
