import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j57wj0bpu.css';
import '../../css/p/p2m3hpblu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j57wj0bpu"/><path class="p2m3hpblu"/></g>`,
		"fallback": "streamline:alien",
	});
}

export default Component;
