import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fb72hkb-i.css';
import '../../css/y/ysv981b8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fb72hkb-i"/><path class="ysv981b8a"/></g>`,
		"fallback": "streamline:align-front-1",
	});
}

export default Component;
