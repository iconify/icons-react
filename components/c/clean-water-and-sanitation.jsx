import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ycuzcqo6c.css';
import '../../css/m/mowkucc6k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ycuzcqo6c"/><path class="mowkucc6k"/></g>`,
		"fallback": "streamline:clean-water-and-sanitation",
	});
}

export default Component;
