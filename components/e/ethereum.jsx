import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y7kaa5brs.css';
import '../../css/e/eyg0wxuez.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y7kaa5brs"/><path class="eyg0wxuez"/></g>`,
		"fallback": "streamline:ethereum",
	});
}

export default Component;
