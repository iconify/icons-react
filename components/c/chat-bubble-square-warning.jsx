import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fv963z5me.css';
import '../../css/g/gh9dtsaab.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fv963z5me"/><path class="gh9dtsaab"/></g>`,
		"fallback": "streamline:chat-bubble-square-warning",
	});
}

export default Component;
